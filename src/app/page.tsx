import { Menu } from "./components/menu/menu";
import { Hero } from "./components/hero/hero"
import { About } from "./components/about/about";
import { Gallery } from "./components/gallery/gallery";
import { Blog } from "./components/blog/blog";
import { Partner } from "./components/partner/partner";

export default function Home() {
  return (
    <>
      <Menu />
      <Hero />
      <About />
      <Gallery />
      <Blog />
      <Partner/>
    </>
  )
}
