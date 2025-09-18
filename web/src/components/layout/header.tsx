import { Button } from "@/components/ui/button";
import { $router } from "@/lib/router";
import { useStore } from "@nanostores/react";
import { useState } from "react";

const Header = () => {
  const page = useStore($router);
  const [showMine, setShowMine] = useState(false);

  if (!page) return null;

  return (
    <div className="flex justify-center gap-3 p-1 border-b">
      <Button
        variant={"link"}
        className={`${showMine ? "underline" : ""}`}
        onClick = {()=> setShowMine(true)}
      >
        {page.route !== "post" ? "My Posts" : "My Comments"}
      </Button>
      <Button
        variant={"link"}
        className={`${!showMine ? "underline" : ""}`}
        onClick = {()=> setShowMine(false)}
      >
        {page.route !== "post" ? "All Posts" : "All Comments"}
      </Button>
    </div>
  );
};

export default Header;
