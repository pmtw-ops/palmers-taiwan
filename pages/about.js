
import { getAbout } from '@/lib/api_about'
import { getAppData } from '@/lib/api_app'

import Head from 'next/head'
import Image from 'next/image'
import Layout from '@/components/layout'
import Container from '@/components/container'
import SectionSeparator from '@/components/section-separator'
import CardSustainability from '@/components/about/card-sustainability'
import { CMS_URL } from '@/lib/constants'

export default function Index({ about, appData }) {
  let today = new Date();
  let years = today.getFullYear() - 1840;

  let image = about?.image[0];
  let imgName = image?.name;
  let imgAlt = image?.alternativeText;
  let imgCaption = image?.caption;
  let imgUrl = image ? CMS_URL + image.url : "https://via.placeholder.com/1000x650"

  return (
    <>
      <Layout appData={appData}>
        <div>
          <Image src={imgUrl} alt={imgAlt} width={1920} height={550} />
        </div>

        <Container>
          <div className="text-center p-1 m-7">
            {/* <p>美國原裝進口品牌-帕瑪氏，成立於1840年，是美國最早投入問題肌膚和頭髮養護研發製造者之一。成立{years}年來，始終堅持安全及有效的兩大經營理念，一系列高品質、天然成分的肌膚及髮部商品，都必須經過長時間的研發，並通過安全性及有效性的驗證後，才上市銷售。尤其是獨特的可可脂專業配方更是獨步全球，沒有任何一家競爭者可以仿製!目前行銷遍佈世界100餘國，擁有廣大的愛用者。</p> */}
            <p className="p-2">帕瑪氏成立於 {years} 年前（1920），是美國最早的皮膚護理公司之一。 布朗藥業有限公司（Browne Drug Co., Inc.）憑藉其值得信賴的 Palmer’s 品牌，是治療為導向的美容產品中的領導者。Palmer’s 的產品值得信賴，並世代相傳。</p>
            <p className="p-2">“選擇真正天然的產品”是我們生產的每一種產品的基本理念。真正有效的配方中的高品質，天然成分，以實惠的價格為真實的人們提供。Palmer's 在全球 100 多個國家銷售，以可可脂配方而聞名，在美國是排名第一的可可脂品牌。</p>
          </div>
          <div className="text-center p-1 m-7">
            <div className="font-bold text-pmbrown-400 text-4xl p-3">帕瑪氏的天然成分</div>
          </div>

          <div className="block m-4 items-center justify-center md:flex md:flex-wrap lg:grid lg:grid-cols-5">
            <div className="items-center lg:order-first col-span-2 m-2">
              <Image src={about ? CMS_URL + about.contentImages[0].url : "https://via.placeholder.com/700x400"} alt={""} width={700} height={400} />
            </div>
            <div className="col-span-3 p-1 m-4">
              <div className="font-bold text-2xl p-2 text-center lg:text-left">可可脂 COCOA BUTTER</div>
              <p className="p-1">在過去40年中，我們的核心成分是可可脂，實際上，我們每年購買超過265,000磅的可可脂。 我們稱其為自然的超級成分，因為它具有出色的癒合性能以及幫助皮膚保持水分的能力。</p>
              <p className="p-1">可可脂是從可可豆中提取的豐富植物脂肪，可可豆生長在可可樹的可可豆莢中。 成熟時，這些豆莢是從樹乾和樹枝上收穫的，並用與豆子質量相對應的顏色分開。 香氣和風味較差的那些可用於工業巧克力，而帕爾默的可可脂配方則使用更高質量的豆。</p>
              <p className="p-1">Palmer's致力於照顧您的皮膚。我們從加納采購最原始，最優質的可可脂，那裡有世界上最優質的可可豆。</p>
              <p className="p-1">我們的原始可可脂是從道德和可持續的角度進行採購的，我們是世界可可基金會的驕傲成員，該基金會支持可持續農業。</p>
            </div>
          </div>

          <div className="block m-4 items-center justify-center md:flex md:flex-wrap lg:grid lg:grid-cols-5">
            <div className="lg:order-last lg:col-span-2 m-2">
              <Image src={about ? CMS_URL + about.contentImages[1].url : "https://via.placeholder.com/700x400"} alt={""} width={700} height={400} />
            </div>
            <div className="lg:col-span-3 p-1 m-4">
              <div className="font-bold text-2xl p-2 text-center lg:text-left">椰子油 COCONUT OIL</div>
              <p className="p-1">椰子油中富含天然健康的皮膚和頭髮成分，例如月桂酸，辛酸，癸酸，蛋白質，抗氧化劑和維生素E。</p>
              <p className="p-1">椰子油還含有高含量的中鏈脂肪酸，可形成透氣的保護性屏障，有助於鎖定水分，防止皮膚脫水並促進更健康的頭髮。</p>
              <p className="p-1">月桂酸佔椰子油中的大部分脂肪酸，並且因其抗微生物和抗菌性能而非常有價值。</p>
              <p className="p-1">天然抗氧化劑有助於保持皮膚年輕。 維生素E和蛋白質能夠使肌膚恢復活力，撫平肌膚，並使秀發更加豐盈。</p>
            </div>
          </div>

          <div className="block m-4 items-center justify-center md:flex md:flex-wrap lg:grid lg:grid-cols-5">
            <div className="lg:order-first col-span-2 m-2">
              <Image src={about ? CMS_URL + about.contentImages[2].url : "https://via.placeholder.com/700x400"} alt={""} width={700} height={400} />
            </div>
            <div className="lg:col-span-3 p-1 m-4">
              <div className="font-bold text-2xl p-2 text-center lg:text-left">乳油木果油SHEA BUTTER</div>
              <p className="p-1">在過去40年中，我們的核心成分是可可脂，實際上，我們每年購買超過265,000磅的可可脂。 我們稱其為自然的超級成分，因為它具有出色的癒合性能以及幫助皮膚保持水分的能力。</p>
              <p className="p-1">可可脂是從可可豆中提取的豐富植物脂肪，可可豆生長在可可樹的可可豆莢中。 成熟時，這些豆莢是從樹乾和樹枝上收穫的，並用與豆子質量相對應的顏色分開。 香氣和風味較差的那些可用於工業巧克力，而帕爾默的可可脂配方則使用更高質量的豆。</p>
              <p className="p-1">Palmer's致力於照顧您的皮膚。我們從加納采購最原始，最優質的可可脂，那裡有世界上最優質的可可豆。</p>
              <p className="p-1">我們的原始可可脂是從道德和可持續的角度進行採購的，我們是世界可可基金會的驕傲成員，該基金會支持可持續農業。</p>
            </div>
          </div>

          <div className="block m-4 items-center justify-center md:flex md:flex-wrap lg:grid lg:grid-cols-5">
            <div className="lg:order-last col-span-2 m-2">
              <Image src={about ? CMS_URL + about.contentImages[3].url : "https://via.placeholder.com/700x400"} alt={""} width={700} height={400} />
            </div>
            <div className="lg:col-span-3 p-1 m-4">
              <div className="font-bold text-2xl p-2 text-center lg:text-left">橄欖油 OLIVE OIL</div>
              <p className="p-1">帕瑪氏的橄欖油配方產品包含特級初榨橄欖油，其中所含的抗氧化劑可保護皮膚和頭髮免受自由基的傷害，從而使皮膚看上去暗淡無味。</p>
            </div>
          </div>

          <div className="block m-4 items-center justify-center md:flex md:flex-wrap lg:grid lg:grid-cols-5">
            <div className="lg:order-first col-span-2 m-2">
              <Image src={about ? CMS_URL + about.contentImages[4].url : "https://via.placeholder.com/700x400"} alt={""} width={700} height={400} />
            </div>
            <div className="lg:col-span-3 p-1 m-4">
              <div className="font-bold text-2xl p-2 text-center lg:text-left">維他命E VITAMIN E</div>
              <p className="p-1">帕瑪氏的天然維生素E護膚產品經特殊配製，可舒緩和滋養乾燥的皮膚。</p>
            </div>
          </div>

        </Container>
      </Layout>

    </>
  )
}

export async function getStaticProps({ preview = null }) {
  const about = (await getAbout()) || []
  const appData = (await getAppData()) || []

  return {
    props: { about, appData }
  }
}
