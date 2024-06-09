import { Dialog } from "@/features/post-composer/custom/dialog";
import Content from "../Content";
import Trigger from "./Trigger";

// # Component
export default function DialogComposer() {
  return (
    <Dialog>
      <Trigger />
      <Content />
    </Dialog>
  );
}
