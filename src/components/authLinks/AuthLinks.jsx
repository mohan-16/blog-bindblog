import Link from "next/link";

const AuthLinks = () => {
  const status = "login";

  return (
    <>
      {status === "login" ? (
        <Link href="/login">Login</Link>
      ) : (
        <>
          <Link href="/write">Write</Link>
          <span>Logout</span>
        </>
      )}
    </>
  );
};

export default AuthLinks;
