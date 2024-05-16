import * as actions from "@/actions/auth";
import Test from "@/components/Test";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <h1>Home Page</h1>
      <Test />
      <form action={actions.logout}>
        <Button>Logout</Button>
      </form>
    </>
  );
}
