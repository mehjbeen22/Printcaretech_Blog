import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-blue-900 shadow-inner text-gray-100 p-4 text-center">
      <div>
        {" "}
        <Link to="/privacypolicy">Privacy Policy</Link> | Terms of Use | Use of
        Cookies| Accessibility
      </div>
      <p className="mt-4">
        Copyright © 2024 Printercaretech. All Rights Reserved.
      </p>
    </footer>
  );
}
