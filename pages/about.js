
import Layout from '@/components/layout'
import Head from 'next/head'
import { CMS_NAME } from '@/lib/constants'
import Container from '@/components/container'
import SectionSeparator from '@/components/section-separator'
import CardSustainability from '@/components/about/card-sustainability'


export default function Index({ categories, collections, allPosts, preview }) {
  // const heroPost = allPosts[0]
  // const morePosts = allPosts.slice(1)

  let today = new Date();
  let years = today.getFullYear() - 1840

  return (
    <>
      <Container>
        <div>
          <img src="/img/about-us-real-heritage.jpg" alt=""></img>
        </div>
        <Container>
          <div className="text-center p-3 m-7">
            <div className="font-bold text-3xl p-3">行銷世界{years}年</div>
            <p>美國原裝進口品牌-帕瑪氏，成立於1840年，是美國最早投入問題肌膚和頭髮養護研發製造者之一。成立{years}年來，始終堅持安全及有效的兩大經營理念，一系列高品質、天然成分的肌膚及髮部商品，都必須經過長時間的研發，並通過安全性及有效性的驗證後，才上市銷售。尤其是獨特的可可脂專業配方更是獨步全球，沒有任何一家競爭者可以仿製!目前行銷遍佈世界100餘國，擁有廣大的愛用者。</p>
          </div>
        </Container>

        <div className="m-4 grid lg:grid-cols-2">
          <div className="col-span-1 text-center p-3 m-7">
            <div className="font-bold text-lg p-3">獨特完美的天然配方</div>
            <p>帕瑪氏商品最核心的三種天然組合成分，可可脂、橄欖脂、乳木果都是萃取自神奇的大自然。由這三大主要成分研發及推出四大品牌，完整身體及髮部一系列商品，從頭到腳全方位呵護您全身肌膚。</p>
          </div>
          <div className="col-span-1 m-2 opacity-75">
            <img src="/img/jake-givens-ocwmWiNAWGs-unsplash.jpg"></img>
          </div>
        </div>

        <div className="m-4 grid lg:grid-cols-2">
          <div className="col-span-1 m-2 opacity-75">
            <img className="" src="/img/wylly-suhendra-Swk4G_xi_uM-unsplash.jpg" alt=""></img>
          </div>
          <div className="col-span-1 text-center p-3 m-7">
            <div className="font-bold text-lg p-3">未來的堅持與承諾</div>
            <p>未來將陸續堅持製造過程不添加防腐劑，不含礦物油，不含硫酸鹽(NO SULFATES) 拒絕人工香料與人工色素，堅守嚴謹製造過程，並反動動物實驗，免於殘酷等行動，除了提供消費者更優良產品外，希望為地球環境及人文公益關懷進更多心力！尤其是有機商品占比陸續提升，透過美國USDA的認證，陸續採用多明尼加、非洲喀麥隆、西班牙等有機農場 之可可脂、橄欖脂及乳木果油。其次帕瑪氏全球公益政策推行，2011年台灣推出由孫芸芸小姐活動代言的『內外皆美粉紅行動』公益活動，結束後捐款新台幣壹佰萬元給台灣家庭扶助基金會，用於專款協助約850個家庭經濟弱勢幼童的營養改善計畫。</p>
          </div>

        </div>
        <SectionSeparator />
      </Container>

      <Container>
        <div className="text-center p-3 m-7">
          <div className="font-bold text-3xl p-3"><h1>和世界一起永續發展</h1></div>
        </div>
        <div className="grid gap-4 lg:gap-12 lg:grid-cols-2">
          <CardSustainability />
          <CardSustainability />
          <CardSustainability />
          <CardSustainability />
          <CardSustainability />
          <CardSustainability />
          <CardSustainability />
        </div>
      </Container>
      <div className="p-4">{' '}</div>
    </>
  )
}

// export async function getStaticProps({ preview = null }) {
//   //const allPosts = (await getAllPostsForHome(preview)) || []
//   console.log(allPosts)
//   return {
//     props: {} //allPosts, preview },
//   }
// }
