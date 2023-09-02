import { Menu } from "./components/menu/menu";
import { Hero } from "./components/hero/hero"
import { About } from "./components/about/about";
import { Gallery } from "./components/gallery/gallery";

export default function Home() {
  return (
    <>
      <Menu />
      <Hero />
      <About />
      <Gallery />
    </>
  )
}
