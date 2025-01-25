import React from 'react'
import Card from './Card'
import BorderText from '../common/BorderText'
import explore1r from '../../assets/explore/explore1r.svg'
import explore2r from '../../assets/explore/explore2r.svg'
import explore3r from '../../assets/explore/explore3r.png'
import explore4r from '../../assets/explore/explore4r.png'
import explore5r from '../../assets/explore/explore5r.jpg'
import explore6r from '../../assets/explore/explore6r.png'
import explore7r from '../../assets/explore/explore7r.png'


const Explore = () => {
    const data=[
        {
            title1:"Strike Out in Style: Bowling ",
            title2:"Extravaganza",
            desc:"Get ready to roll and score big at Joy Junction's bowling alley! Perfect for family outings, friendly competitions, or just a casual game with friends, our bowling lanes offer a fun-filled experience for all skill levels. With state-of-the-art facilities and neon lighting for better experience, it's time to lace up those bowling shoes and aim for that perfect strike!",
            right_bg:explore2r,
            bg1:"050505",
            bg2:"1C5056",
            bg3:"0C0D10",
            bg4:"050505",
        },
        {
            title1:"Take Aim, Feel the Rush: ",
            title2:"Shooting Games Galore",
            desc:"Lock and load for an adrenaline-pumping experience at Joy Junction's shooting games zone! Whether you're into sharpshooting or just looking to blow off some steam, our shooting games offer thrilling challenges for all. With realistic simulations and a variety of targets, get ready to test your skills and see if you have what it takes to hit the bullseye!",
            right_bg:explore3r,
            bg1:"000000",
            bg2:"22113D",
            bg3:"702D9A",
            bg4:"401B51",
        },
        {
            title1:"Kid's Play Heaven: Soft play",
            title2:"For Kids",
            desc:"Let your little ones explore and play in a safe and stimulating environment at Joy Junction's soft play area! Designed with kids' safety and enjoyment in mind, our soft play zone is perfect for toddlers and young children. With padded floors, interactive toys, and engaging activities, it's the perfect place for kids to let their imaginations run wild while you relax knowing they're having a blast in a secure setting.",
            right_bg:explore6r,
            bg1:"9A8CAE",
            bg2:"9E6983",
            bg3:"994051",
            bg4:"000000",
        },

        {
            title1:"PS5 Paradise: Immerse ",
            title2:"Yourself in Next-Gen Gaming",
            desc:"Step into the world of cutting-edge gaming with our PS5 Paradise at Joy Junction. Experience the latest titles in stunning detail and immerse yourself in gameplay like never before. Whether you're a seasoned gamer or just starting, our PS5 gaming zone promises excitement and thrills for all.",
            right_bg:explore1r,
            bg1:"2F1810",
            bg2:"592520",
            bg3:"AF5C2F",
            bg4:"5F2321",
        },
        {
            title1:"Bounce to New Heights: ",
            title2:"Trampoline Thrills",
            desc:"Reach for the sky and experience the joy of bouncing at Joy Junction's trampoline zone! Perfect for kids and adults alike, our trampolines offer a safe and exhilarating way to have fun and stay active. Whether you're practicing your flips or just enjoying the feeling of weightlessness, our trampoline zone is guaranteed to put a spring in your step!",
            right_bg:explore5r,
            bg1:"07313A",
            bg2:"07596B",
            bg3:"061315",
            bg4:"000000",
            
        },
        {
            title1:"Arcade Adventure Awaits:",
            title2:"Play, Win, Repeat",
            desc:"Step into a world of retro fun and modern excitement at Joy Junction's arcade game zone! From classic favorites to the latest releases, our arcade games offer something for everyone. Race, jump, shoot, and compete your way to the high score as you immerse yourself in a world of gaming nostalgia and non-stop entertainment. Join us for an unforgettable arcade adventure today!",
            right_bg:explore4r,
            bg1:"630630",
            bg2:"9E0B2C",
            bg3:"690618",
            bg4:"050505",
        },
        {
            title1:"Swing Into Action:",
            title2:"Experience Cricket Thrills",
            desc:"Unleash your inner cricketer at Joy Junction! Grab the bat, step up to the crease, and face our high-speed bowling machine. Perfect your timing to hit towering shots and rack up points! Whether you're a cricket enthusiast or trying it for the first time, this thrilling experience guarantees fun for all.",
            right_bg:explore7r,
            bg1:"0A0538",
            bg2:"1096B1",
            bg3:"120A64",
            bg4:"0A0538",
        },
        
    ]

  return (
    <div>
        <div className='flex justify-center sm:justify-end mt-14 mr-4' id='explore'>
            <BorderText text={"EXPLORE"}/>
        </div>
        <div>
            {
                data.map((card,i)=>{
                    return (
                        <Card card={card} key={i} ind={i}/>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Explore