import Clients from '@/components/Clients'
import Consulting from '@/components/Consulting'
import Contact from '@/components/Contact'
import Delever from '@/components/Delever'
import Direction from '@/components/Direction'
import Erpsystem from '@/components/Erpsystem'
import Footer from '@/components/Footer'
import Goodzone from '@/components/Goodzone'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Iman from '@/components/Iman'
import Optimization from '@/components/Optimization'
import Services from '@/components/Services'
import Smsuz from '@/components/Smsuz'
import Team from '@/components/Team'
import Tools from '@/components/Tools'
import Uiux from '@/components/Uiux'
import Wework from '@/components/Wework'

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Direction />
      <Team />
      <Services />
      <Erpsystem />
      <Uiux />
      <Optimization />
      <Consulting />
      <Tools />
      <Clients /> 
      <div
        className='  bg-contain py-10'
        style={{ backgroundImage: 'url(/images/background-pattern.jpeg)' }}
      >
        <Delever />
        <Smsuz />
        <Goodzone />
        <Iman />
        <Wework />
        <Contact />
      </div>
      <Footer />
    </div>
  )
}
