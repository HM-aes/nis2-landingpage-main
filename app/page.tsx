import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import ProductPreview from "@/components/sections/product-preview";
import Scope from "@/components/sections/scope";
import Technology from "@/components/sections/technology";
import ProofSignup from "@/components/sections/proof-signup";

export default function Page() {
  return (
    <>
      <Hero />
      <About />
      <ProductPreview />
      <Scope />
      <Technology />
      <ProofSignup />
    </>
  );
}
