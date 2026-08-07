import { permanentRedirect } from "next/navigation";

// Old store short links (e.g. /b/ybONP) were removed. 308-redirect any
// /b/* path to /courses so indexed dead links stop 404ing and pass signals.
export default function OldStoreShortLink() {
  permanentRedirect("/courses");
}
