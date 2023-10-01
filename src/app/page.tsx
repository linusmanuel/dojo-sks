import { Menu } from "./components/menu/menu";
import { Hero } from "./components/hero/hero"
import { About } from "./components/about/about";
import { Gallery } from "./components/gallery/gallery";
import { Blog } from "./components/blog/blog";
import { Partner } from "./components/partner/partner";
import { Footer } from "./components/footer/footer";

export default function Home() {
  const menuItems = ['Inicio', 'Time', 'Blog', 'Contato']
  return (
    <>
      <Menu/>
      <Hero />
      <About />
      <Gallery />
      <Blog />
      <Partner/>
      <Footer/>
    </>
  )
}
