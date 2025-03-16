import { Container } from "@/components/surfaces/container";
import { useGet } from "@/http/generated/admin/admin";

export function Home() {
  const { data } = useGet();

  return (
    <Container title="Início">
      <p>{data?.data}</p>
    </Container>
  );
}
