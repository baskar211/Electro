import Layout from '../Layout/layout'
import Homepage from '../Home/Homepage'
import Footer from '../Footer/footer'
import { Arrivals, Brands, ProductCardPage } from '../../components/ProductCards/products';
import { CarouselBanner, Promotional } from '../../components/ProductCards/banner';

export default function Home() {
  return (
    <div>
      <Layout />
      <Homepage />
      <div>
<Arrivals/>
<Brands/>
<ProductCardPage/>
<Promotional/>
<CarouselBanner/>
<ProductCardPage/>



      </div>
      <Footer />

    </div>
  )
}






