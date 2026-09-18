import axios from "axios";
import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authApi } from "../../features/auth/api/authApi";

export function RegisterPage() {
    const navigate = useNavigate();

    const [ownerName, setOwnerName] = useState("");
    const [tenantName, setTenantName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [error, setError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setError("");

        if (password.length < 8) {
            setError("Password must contain at least 8 characters.");
            return;
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await authApi.register({
                businessName: tenantName.trim(),
                ownerName: ownerName.trim(),
                businessEmail: email.trim().toLowerCase(),
                password,
                confirmPassword
            });

            localStorage.setItem("access_token", response.accessToken);

            if (response.refreshToken) {
                localStorage.setItem("refresh_token", response.refreshToken);
            }

            navigate("/login", { replace: true });
        } catch (requestError) {
            if (axios.isAxiosError<{ message?: string }>(requestError)) {
                setError(
                    requestError.response?.data?.message ??
                    "Account creation failed. Please try again."
                );
            } else {
                setError("Account creation failed. Please try again.");
            }
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <main className="public-page auth-page">
            <section className="join-panel auth-panel">
                <Link className="brand brand-link" to="/">
                    QueueUp
                </Link>

                <p className="eyebrow">BUSINESS ACCOUNT</p>
                <h1>Create your account</h1>

                <p className="supporting-text">
                    Set up your business workspace and create your first digital queue.
                </p>

                <form onSubmit={handleSubmit}>
                    <label htmlFor="ownerName">Your name</label>
                    <input
                        id="ownerName"
                        value={ownerName}
                        onChange={(event) => setOwnerName(event.target.value)}
                        autoComplete="name"
                        required
                    />

                    <label htmlFor="tenantName">Business name</label>
                    <input
                        id="tenantName"
                        value={tenantName}
                        onChange={(event) => setTenantName(event.target.value)}
                        autoComplete="organization"
                        required
                    />

                    <label htmlFor="email">Business email</label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        autoComplete="email"
                        required
                    />

                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        autoComplete="new-password"
                        minLength={8}
                        required
                    />

                    <small className="field-help">
                        Use at least 8 characters.
                    </small>

                    <label htmlFor="confirmPassword">Confirm password</label>
                    <input
                        id="confirmPassword"
                        type="password"
                        value={confirmPassword}
                        onChange={(event) => setConfirmPassword(event.target.value)}
                        autoComplete="new-password"
                        required
                    />

                    {error && (
                        <div className="form-error" role="alert">
                            {error}
                        </div>
                    )}

                    <button
                        className="button button--primary"
                        type="submit"
                        disabled={isSubmitting}
                    >
                        {isSubmitting
                            ? "Creating account..."
                            : "Create business account"}
                    </button>
                </form>

                <p className="auth-switch">
                    Already have an account? <Link to="/login">Log in</Link>
                </p>
            </section>
        </main>
    );
}