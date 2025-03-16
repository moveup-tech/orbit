import { Container } from "@/components/surfaces/container";
import { useGet } from "@/http/generated/admin/admin";

export function Login() {
  const { data } = useGet();
  return (
    <Container title="Login">
      <p>{data?.data}</p>
    </Container>
  );
}
