import Container from '@/components/container'


export default function BrandStory() {
  let today = new Date();
  let years = today.getFullYear() - 1840;

  return (
    <div className="-mt-2 p-2 pt-4 pb-4 bg-gray-100">
      <Container>
        <div className="items-center md:grid md:grid-cols-4 md:gap-4">
          <div className="col-span-1 text-center">
            <h1 className="font-bold text-4xl p-2">品牌介紹</h1>
            <h2 className="text-xl p-2">Brand Story</h2>
          </div>
          <div className="col-span-3 border-t-2 md:border-t-0 md:border-l-2 p-2 pl-4">
            <div className="p-2">
              <h3 className="font-bold text-xl p-2">行銷世界{years}年</h3>
              <p className="pl-2">美國品牌-帕瑪氏，成立於1840年，是美國最早投入問題肌膚和頭髮養護研發製造者之一。成立{years}年，始終堅持安全及有效的兩大經營理念，一系列高品質，天然成分的部商品，都必須經過長時間的研務，並通過安全性及有效性的驗證後，才上市銷售。尤其是獨特的可可脂專業配方更是獨步全球，沒有任何一家競爭者可以仿製！目前行銷道佈世界100餘國，擁有愛用者</p>
            </div>
            <div className="p-2">
              <h3 className="font-bold text-xl p-2">獨特完美的天然配方</h3>
              <p className="pl-2">帕瑪氏商品最核心的三種天然組合成分，可可脂橄欖脂，乳木果都是萃取自神奇的大自然。由這三大主要成分研發及推出四大品牌，完整身體及髮部一系列商品，從頭到脚全方位可誕您全身肌膚。</p>
            </div>
            <div className="p-2">
              <h3 className="font-bold text-xl p-2">未來的堅持與承諾</h3>
              <p className="pl-2">未來將陸續堅持製造過程不添加防腐劑，不含礦物油，不含硫的塑（NO SULFATES）拒絕人工香料與人工色素，堅守嚴護製造過程，並反動動物實驗，免於殘酷等行動，除了提供消費者更優良產品外，希望為地球環境及人文公益關懷進更多心力！尤其是有概商品点比陸續提升，造過美國USDA的認證，陸續採用多明尼加，非洲喀豪隆，西班牙等有機農場之可可脂，橄機脂及乳木果油。其文帕瑪氏全球公益取策推行，2011年台灣推出由孫芸小姐活動代言的『內外皆美粉紅行動』公益活動，結東後捐軟新台需查價萬元給台灣家庭扶助基金會用於專款保助的850個家庭經濟勢幼童的營養改善計畫。</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
