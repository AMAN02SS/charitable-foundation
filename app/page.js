import Link from 'next/link';
import styles from '../components/SpecialHeading.module.css';

export default function Home() {
  return (
    <>

      <div className="my-10">

        <div className="py-5 box-border">
          <div className=" flex justify-center items-center flex-col text-black">

            <div className="max-w-md mx-auto border-b-2 font-bold text-xl text-right pb-2.5 my-10">
              <p className={styles.specialHeading}>“Give a Child the Gift of Imagination”</p>
              <span className={styles.specialHeading}>-Donate Storybooks Today”</span>
            </div>
            <div className="text-[90px] tracking-[2px] leading-[90px] mt-8 mb-6">
              <h1 className={styles.specialHeading}>Education</h1>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <Link href={"#about"}> <button className="bg-blue-300 p-5 rounded-full font-medium hover:bg-blue-400">READ MORE</button></Link>
          </div>
        </div>
        <div className="box flex justify-evenly">
          <div className="card relative bg-[#0771b8] w-1/6 flex flex-col justify-center items-center p-5 rounded-2xl transition duration-300 ease-in-out hover:shadow-2xl hover:scale-105 hover:z-20 cursor-pointer rounded-bl-[45%] rounded-br-[45%] h-90 ">
            <div>
              <img src="/health.png" alt="" />
            </div>
            <h2 className={`${styles.specialHeading} text-4xl p-5 text-white`}>Health</h2>
            <span className="absolute bg-white rounded-full w-15 h-15 text-2xl font-bold top-82 border flex justify-center items-center">{'>'}</span>
          </div>
          <div className="card relative bg-green-400 w-1/6 flex flex-col justify-center items-center p-5 rounded-2xl transition duration-300 ease-in-out hover:shadow-2xl hover:scale-105 hover:z-20 cursor-pointer rounded-bl-[45%] rounded-br-[45%] h-90">
            <div>
              <img src="/food.png" alt="" />
            </div>
            <h2 className={`${styles.specialHeading} text-4xl p-5 text-white`}>Hunger</h2>
            <span className="absolute bg-white rounded-full w-15 h-15 text-2xl font-bold top-82 border flex justify-center items-center">{'>'}</span>
          </div>
          <div className="card relative bg-red-400 w-1/6 flex flex-col justify-center items-center p-5 rounded-2xl transition duration-300 ease-in-out hover:shadow-2xl hover:scale-105 hover:z-20 cursor-pointer rounded-bl-[45%] rounded-br-[45%] h-90">
            <div>
              <img src="/education.png" alt="" />
            </div>
            <h2 className={`${styles.specialHeading} text-4xl p-5 text-white`}>Education</h2>
            <span className="absolute bg-white rounded-full w-15 h-15 text-2xl font-bold top-82 border flex justify-center items-center">{'>'}</span>
          </div>
          <div className="card relative bg-yellow-400 w-1/6 flex flex-col justify-center items-center p-5 rounded-2xl transition duration-300 ease-in-out hover:shadow-2xl hover:scale-105 hover:z-20 cursor-pointer rounded-bl-[45%] rounded-br-[45%] h-90">
            <div>
              <img src="/livehood.png" alt="" />
            </div>
            <h2 className={`${styles.specialHeading} text-4xl p-5 text-white`}>Livehood</h2>
            <span className="absolute bg-white rounded-full w-15 h-15 text-2xl font-bold top-82 border flex justify-center items-center">{'>'}</span>
          </div>
          <div className="card relative bg-[#2ba8df] w-1/6 flex flex-col justify-center items-center p-5 rounded-2xl transition duration-300 ease-in-out hover:shadow-2xl hover:scale-105 hover:z-20 cursor-pointer rounded-bl-[45%] rounded-br-[45%] h-90">
            <div>
              <img src="/disaster.png" alt="" />
            </div>
            <h2 className={`${styles.specialHeading} text-4xl p-5 text-white whitespace-nowrap`}>Disaster Relief</h2>
            <span className="absolute bg-white rounded-full w-15 h-15 text-2xl font-bold top-82 border flex justify-center items-center">{'>'}</span>
          </div>

        </div>

      </div>
      <div className="bg-[url('/programme_bg.png')] bg-cover bg-no-repeat bg-center h-80 ">
        <div className='flex items-center mx-80 py-20 gap-5'>
          <div className='relative'>
            <h1 className={`${styles.specialHeading} text-4xl `} id='programs'>Our Programmes</h1>
            <ul className='flex flex-col text-2xl py-2 list-none ml-8'>
              <li className='before:absolute before:top-14 before:left-0 before:w-3 before:h-3 before:bg-blue-500'>We have over 25 years of ground experience in the fields of disability and food.</li>
              <li className='before:absolute before:top-23 before:left-0 before:w-3 before:h-3 before:bg-green-500'>We are one of the few NGOs using technology in philanthropy to bring innovation in disability.</li>
              <li className='before:absolute before:top-31 before:left-0 before:w-3 before:h-3 before:bg-red-500'>We work with a strong network of NGOs and beneficiary groups across the globe.</li>
              <li className='before:absolute before:top-39 before:left-0 before:w-3 before:h-3 before:bg-[#00c3ff]'>We have experience doing projects pan India, especially in the most remote rural areas.</li>
            </ul>
          </div>
          <div className='w-3 h-30 m-2 bg-yellow-400'></div>
          <div className='px-5'>
            <h1 className={`${styles.specialHeading2} text-6xl`} title='Aman'>Aman</h1>
          </div>
        </div>

      </div>
      <div className='bg-white h-30 flex justify-center items-center'>
        <div className='relative px-12'>
          <h1 className={`${styles.specialHeading} text-5xl before:absolute before:top-3 before:left-0 before:w-7 before:h-7 before:bg-blue-500`}>Our Project</h1>
        </div>
      </div>
      <div className='bg-[#0771b8] h-80 relative box-border'>
        <div className='flex justify-center items-center mx-50 gap-10 absolute left-25 top-15 z-1'>
          <div>
            <div><img src="/p3.jpg" alt="" /></div>
            <div className='w-full h-40 bg-green-400 flex items-center flex-col'>
              <h2 className={`${styles.specialHeading} text-3xl text-center pt-10 text-white`}>Cloths</h2>
              <span className='p-4'><button className="bg-blue-300 p-3 rounded-full font-medium hover:bg-blue-400">READ MORE</button></span>
            </div>
          </div>
          <div>
            <div><img src="/p4.jpg" alt="" /></div>
            <div className='w-full h-40 bg-yellow-500 flex items-center flex-col'>
              <h2 className={`${styles.specialHeading} text-3xl text-center pt-10 text-white`}>Food for Childrens  </h2>
              <span className='p-4' ><button className="bg-blue-300 p-3 rounded-full font-medium hover:bg-blue-400">READ MORE</button></span>
            </div>
          </div>
          <div>
            <div><img src="/p1.jpg" alt="" /></div>
            <div className='w-full h-40 bg-red-400 flex items-center flex-col'>
              <h2 className={`${styles.specialHeading} text-3xl text-center pt-10 text-white`}>Mini Library</h2>
              <span className='p-4'><button className="bg-blue-300 p-3 rounded-full font-medium hover:bg-blue-400">READ MORE</button></span>
            </div>
          </div>
          <div>
            <div><img src="/p2.jpg" alt="" /></div>
            <div className='w-full h-40 bg-blue-500 flex items-center flex-col'>
              <h2 className={`${styles.specialHeading} text-3xl text-center pt-10 text-white`}>Gift a meal</h2>
              <span className='p-4'><button className="bg-blue-300 p-3 rounded-full font-medium hover:bg-blue-400">READ MORE</button></span>
            </div>
          </div>
        </div>

      </div>
      <div className='bg-[#0771b8] h-80 mt-60 relative' id='about'>
        <div className="bg-[url('/programme_bg.png')] opacity-20  bg-cover bg-no-repeat bg-center h-80 ">

        </div>
        <h3 className={`${styles.specialHeading} absolute z-1 top-5 left-[25%] text-8xl text-white`}>Together, We can Bring <br />Change into this World</h3>
        <div>
          <button className='absolute z-1 top-60 left-[45%] border rounded-[50] px-6 py-4 w-50 whitespace-nowrap bg-blue-500 text-white transition duration-300 ease-in-out hover:shadow-2xl hover:scale-105 hover:z-20 cursor-pointer'>DONATE NOW</button>
        </div>
      </div>
      <div>
        <div className='relative'>
          <h1 className=" font-medium p-5 text-center text-5xl ">Charitable Trust For Education India</h1>
        </div>
        <div className='mx-80 font-normal text-3xl'>
          <h1>The best thing you can give a child is a quality education. With it, they can break the poverty cycle and use it to change the world. However, a stunning 5% of children in India are not in school. The solution is a charitable trust for education in India.
            <br /><br />
            More than 50 years ago, the Ratna Nidi Charitable Trust was formed. The goal of this NGO trust is to overcome poverty issues in Mumbai and build a future where children no longer suffer from abuse, hunger, or poverty. We have a wide variety of projects to donate money to charity that provides education, disaster relief, health, clothing, books, clothing, and more.
          </h1>
          <div className='py-5'>
            <h1 className={`${styles.specialHeading} text-4xl pb-5`}>Online Donations</h1>
            <h1>Charitable donations online in India play a major role in making sure that every child, especially those living in poverty, receives an opportunity for a better future through quality education. An NGO trust in India, such as the Ratna Nidi Charitable Trust, work at a grass-roots level, strengthening the system for education and spreading awareness so more people understand the importance of education.</h1>
            <br />
            <h1>Ratna Nidhi Charitable Trust is a registered charitable trust in India and we accept donations from all over the world through online charity donation to bring valuable resources to the people that need them. We can accept your online charity donation in India via credit card, debit card, wire transfers, net banking, as well as other methods. If you have questions about making an education donation in India, you can reach our team by email for more information at info@ratnanidhi.org.</h1>
          </div>
          <div className='py-5'>
            <h1 className={`${styles.specialHeading} text-4xl font-medium pb-5`}>The Importance of Education to the Development of India</h1>
            <h1>A charitable trust for education is incredibly important to the development of India. In addition to being a basic right of every person, education plays a major role in India’s development. Even though India has the second-largest population in the world, the literacy rate is only about 74%. Taking such statistics into consideration, it is clean that there is a great need for improvement to the education system, which can only be possible through your donation to charitable trust.</h1>
            <br />
            <h1>The education system in urban areas where people have the best income sources is advanced but improvements are desperately needed in rural areas and places where people are living below the poverty line. The future of the country depends on the youth and their education depends on your donation to charitable trust in India.</h1>
          </div>
        </div>
      </div>
      <div>
        <div className='bg-[#0771b8] h-50 relative'>
          <div className="bg-[url('/ending_banner.png')] opacity-100  bg-cover bg-no-repeat bg-center h-50 ">
            <h3 className={`${styles.specialHeading} absolute z-3 top-14 left-[30%] text-6xl text-white`}>Subscribe to Our Newsletter</h3>
          </div>
        </div>

      </div>

    </>
  );
}
