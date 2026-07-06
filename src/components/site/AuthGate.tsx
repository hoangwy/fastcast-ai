import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { isAuthenticated, signIn, signOut } from "@/lib/auth";

export function AuthGate({ children }: { children: React.ReactNode }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setAuthenticated(isAuthenticated());
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const success = signIn(email, password);

    if (!success) {
      setError("Email or password is incorrect.");
      setAuthenticated(false);
      return;
    }

    setAuthenticated(true);
    setError("");
  };

  const handleLogout = () => {
    signOut();
    setAuthenticated(false);
    setEmail("");
    setPassword("");
  };

  if (authenticated) {
    return (
      <div>
        {children}
        <button
          type="button"
          onClick={handleLogout}
          className="fixed bottom-4 right-4 z-[60] rounded-full border border-border bg-background/90 px-4 py-2 text-sm font-medium text-foreground shadow-lg backdrop-blur"
        >
          Log out
        </button>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 py-12">
      <div className="w-full max-w-md rounded-2xl border border-border/70 bg-card p-8 shadow-xl">
        <div className="mb-6">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">Fastcast</p>
          <h1 className="mt-2 text-2xl font-semibold tracking-tight text-foreground">Sign in</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Enter the admin credentials to access the website.
          </p>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="email"
              autoComplete="email"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Enter password"
              autoComplete="current-password"
            />
          </div>

          {error ? <p className="text-sm text-red-500">{error}</p> : null}

          <Button type="submit" className="w-full">
            Continue
          </Button>
        </form>
      </div>
    </div>
  );
}
