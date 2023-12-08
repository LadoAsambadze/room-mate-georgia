'use client'

import { useRouter } from 'next/navigation'
import SectionTwo from './SectionTwo'

export default function Main() {
  const router = useRouter()
  return (
    <>
      <div
        className="w-full bg-cover  pt-24 flex flex-col pb-[490px]  md:px-10 md:pt-32  xl:px-20"
        style={{
          backgroundImage: "url('/images/back-main.png')",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
        <div className="flex flex-col w-full  items-center md:items-start">
          <h1
            className="text-center text-white font-medium  text text-2xl leading-9 md:text-start
          md:text-4xl "
          >
            Find a roommate and <br />
            split the rent
          </h1>
          <div className="flex flex-col items-center md:flex-row md:mt-16 ">
            <div
              className="text-white w-full cursor-pointer bg-[#19a463] flex flex-row items-center px-[90px] py-4 rounded-md border-none mt-9
            md:mt-0 md:px-16"
            >
              <svg
                className="mr-4 icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.9235 7.14386C16.9235 7.39337 16.8245 7.63264 16.6483 7.80907C16.472 7.98549 16.233 8.08461 15.9838 8.08461C15.8419 8.08464 15.7019 8.05248 15.5742 7.99055C15.4465 7.92862 15.3345 7.83852 15.2466 7.72702C13.8133 6.29207 12.3502 4.891 10.9032 3.47213C10.8293 3.39341 10.7606 3.31 10.6974 3.22244C10.6915 3.21497 10.6842 3.20881 10.6758 3.20436C10.6674 3.19992 10.6582 3.19728 10.6488 3.19663C10.6393 3.19598 10.6298 3.19734 10.6209 3.20059C10.612 3.20385 10.6039 3.20896 10.5971 3.21556L3.62281 10.0396C3.61394 10.0486 3.60775 10.0599 3.60495 10.0722C3.60215 10.0845 3.60285 10.0973 3.60697 10.1093C3.61108 10.1212 3.61846 10.1318 3.62824 10.1397C3.63803 10.1477 3.64985 10.1528 3.66236 10.1544C3.67928 10.1566 3.69632 10.1578 3.71339 10.1578C3.96392 10.1578 4.21389 10.1578 4.46442 10.1578C5.24584 10.1578 5.58179 10.4976 5.58237 11.2874V14.5086C5.58237 15.3179 5.58237 16.1266 5.58237 16.9359C5.58237 17.3377 5.74289 17.4933 6.14363 17.4938C6.43028 17.4938 6.71177 17.4938 6.99498 17.4938C7.01791 17.4938 7.042 17.4938 7.0655 17.4938C7.31 17.4938 7.54448 17.5911 7.71737 17.7642C7.89025 17.9373 7.98738 18.172 7.98738 18.4168C7.98738 18.6616 7.89025 18.8963 7.71737 19.0694C7.54448 19.2425 7.31 19.3397 7.0655 19.3397C7.04085 19.3397 7.01677 19.3397 6.99269 19.3369C6.69266 19.3369 6.39282 19.3352 6.09317 19.3317C4.72699 19.3191 3.74894 18.3255 3.74722 16.9589C3.74492 15.39 3.74492 13.8221 3.74722 12.2551V12.0646C3.74706 12.0467 3.73987 12.0296 3.7272 12.0171C3.71453 12.0045 3.69741 11.9974 3.67956 11.9974C3.23984 11.9974 2.81387 12.0009 2.3879 11.9974C1.69077 11.9911 1.13524 11.5268 1.02057 10.8414C0.936872 10.3438 1.11287 9.93167 1.47004 9.58269C2.76113 8.32415 4.05011 7.06332 5.33699 5.80019C6.79433 4.37366 8.25301 2.94846 9.71302 1.52461C9.91311 1.33061 10.1573 1.18023 10.3826 1.0132C10.394 1.00459 10.4079 0.999958 10.4222 1H10.8075C10.8217 0.999958 10.8356 1.00459 10.847 1.0132C11.0729 1.18138 11.3166 1.33062 11.5172 1.52405C12.5171 2.48718 13.5054 3.46237 14.4984 4.43469C14.5202 4.4565 14.5414 4.48003 14.5615 4.50414L14.7369 4.44157C14.7369 3.92499 14.7369 3.40841 14.7369 2.89528C14.7369 2.32933 15.1313 1.9132 15.6542 1.91607C16.1702 1.91951 16.5646 2.32704 16.568 2.88093C16.5738 3.99789 16.5738 5.11484 16.568 6.2318C16.5662 6.30244 16.5778 6.37278 16.6024 6.43902C16.703 6.52681 16.7837 6.63512 16.8391 6.75668C16.8945 6.87824 16.9232 7.01026 16.9235 7.14386ZM22.9432 21.5903C23.0097 21.7108 23.0194 21.972 22.9546 22.1419C22.8919 22.3156 22.8 22.4773 22.6829 22.62C22.2512 23.1257 21.5306 23.1205 21.0203 22.6154C20.1604 21.7621 19.3042 20.9054 18.4519 20.0452C18.3881 19.9735 18.3288 19.898 18.2742 19.819C18.2695 19.8481 18.2573 19.8754 18.2387 19.8982C18.2202 19.9211 18.1961 19.9387 18.1687 19.9493C17.6034 20.172 17.049 20.4383 16.4648 20.5916C13.4418 21.3854 10.2439 19.3128 9.69984 16.2345C9.14144 13.0897 11.1457 10.2215 14.2863 9.66879C17.287 9.14188 20.2802 11.3425 20.6821 14.3651C20.8586 15.6927 20.6173 16.9313 19.9207 18.0747C19.8347 18.2142 19.8479 18.2911 19.9608 18.403C20.7675 19.2008 22.7867 21.3056 22.9432 21.5903ZM18.519 15.179C18.5149 14.2929 18.1609 13.4445 17.5343 12.8187C16.9077 12.193 16.0593 11.8408 15.1743 11.839C14.7361 11.8379 14.302 11.9232 13.8967 12.0902C13.4915 12.2572 13.1231 12.5025 12.8126 12.8121C12.5022 13.1217 12.2557 13.4895 12.0873 13.8946C11.919 14.2996 11.832 14.7339 11.8314 15.1727C11.83 16.0589 12.1789 16.9098 12.8019 17.5394C13.4249 18.169 14.2713 18.5263 15.1565 18.5333C16.9883 18.5488 18.523 17.0192 18.5196 15.179H18.519Z"
                  stroke="white"
                  strokeWidth="0.7"
                />
              </svg>
              <span className="hover:text-[#00431a]">Find a Roommate</span>
            </div>

            <div
              onClick={() => router.push('/house')}
              className="text-white  cursor-pointer bg-[#19a463] flex flex-row align-center px-[90px] py-4 rounded-md border-none mt-6 
            md:mt-0 md:ml-10"
            >
              <svg
                className="mr-4 icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.9235 7.14386C16.9235 7.39337 16.8245 7.63264 16.6483 7.80907C16.472 7.98549 16.233 8.08461 15.9838 8.08461C15.8419 8.08464 15.7019 8.05248 15.5742 7.99055C15.4465 7.92862 15.3345 7.83852 15.2466 7.72702C13.8133 6.29207 12.3502 4.891 10.9032 3.47213C10.8293 3.39341 10.7606 3.31 10.6974 3.22244C10.6915 3.21497 10.6842 3.20881 10.6758 3.20436C10.6674 3.19992 10.6582 3.19728 10.6488 3.19663C10.6393 3.19598 10.6298 3.19734 10.6209 3.20059C10.612 3.20385 10.6039 3.20896 10.5971 3.21556L3.62281 10.0396C3.61394 10.0486 3.60775 10.0599 3.60495 10.0722C3.60215 10.0845 3.60285 10.0973 3.60697 10.1093C3.61108 10.1212 3.61846 10.1318 3.62824 10.1397C3.63803 10.1477 3.64985 10.1528 3.66236 10.1544C3.67928 10.1566 3.69632 10.1578 3.71339 10.1578C3.96392 10.1578 4.21389 10.1578 4.46442 10.1578C5.24584 10.1578 5.58179 10.4976 5.58237 11.2874V14.5086C5.58237 15.3179 5.58237 16.1266 5.58237 16.9359C5.58237 17.3377 5.74289 17.4933 6.14363 17.4938C6.43028 17.4938 6.71177 17.4938 6.99498 17.4938C7.01791 17.4938 7.042 17.4938 7.0655 17.4938C7.31 17.4938 7.54448 17.5911 7.71737 17.7642C7.89025 17.9373 7.98738 18.172 7.98738 18.4168C7.98738 18.6616 7.89025 18.8963 7.71737 19.0694C7.54448 19.2425 7.31 19.3397 7.0655 19.3397C7.04085 19.3397 7.01677 19.3397 6.99269 19.3369C6.69266 19.3369 6.39282 19.3352 6.09317 19.3317C4.72699 19.3191 3.74894 18.3255 3.74722 16.9589C3.74492 15.39 3.74492 13.8221 3.74722 12.2551V12.0646C3.74706 12.0467 3.73987 12.0296 3.7272 12.0171C3.71453 12.0045 3.69741 11.9974 3.67956 11.9974C3.23984 11.9974 2.81387 12.0009 2.3879 11.9974C1.69077 11.9911 1.13524 11.5268 1.02057 10.8414C0.936872 10.3438 1.11287 9.93167 1.47004 9.58269C2.76113 8.32415 4.05011 7.06332 5.33699 5.80019C6.79433 4.37366 8.25301 2.94846 9.71302 1.52461C9.91311 1.33061 10.1573 1.18023 10.3826 1.0132C10.394 1.00459 10.4079 0.999958 10.4222 1H10.8075C10.8217 0.999958 10.8356 1.00459 10.847 1.0132C11.0729 1.18138 11.3166 1.33062 11.5172 1.52405C12.5171 2.48718 13.5054 3.46237 14.4984 4.43469C14.5202 4.4565 14.5414 4.48003 14.5615 4.50414L14.7369 4.44157C14.7369 3.92499 14.7369 3.40841 14.7369 2.89528C14.7369 2.32933 15.1313 1.9132 15.6542 1.91607C16.1702 1.91951 16.5646 2.32704 16.568 2.88093C16.5738 3.99789 16.5738 5.11484 16.568 6.2318C16.5662 6.30244 16.5778 6.37278 16.6024 6.43902C16.703 6.52681 16.7837 6.63512 16.8391 6.75668C16.8945 6.87824 16.9232 7.01026 16.9235 7.14386ZM22.9432 21.5903C23.0097 21.7108 23.0194 21.972 22.9546 22.1419C22.8919 22.3156 22.8 22.4773 22.6829 22.62C22.2512 23.1257 21.5306 23.1205 21.0203 22.6154C20.1604 21.7621 19.3042 20.9054 18.4519 20.0452C18.3881 19.9735 18.3288 19.898 18.2742 19.819C18.2695 19.8481 18.2573 19.8754 18.2387 19.8982C18.2202 19.9211 18.1961 19.9387 18.1687 19.9493C17.6034 20.172 17.049 20.4383 16.4648 20.5916C13.4418 21.3854 10.2439 19.3128 9.69984 16.2345C9.14144 13.0897 11.1457 10.2215 14.2863 9.66879C17.287 9.14188 20.2802 11.3425 20.6821 14.3651C20.8586 15.6927 20.6173 16.9313 19.9207 18.0747C19.8347 18.2142 19.8479 18.2911 19.9608 18.403C20.7675 19.2008 22.7867 21.3056 22.9432 21.5903ZM18.519 15.179C18.5149 14.2929 18.1609 13.4445 17.5343 12.8187C16.9077 12.193 16.0593 11.8408 15.1743 11.839C14.7361 11.8379 14.302 11.9232 13.8967 12.0902C13.4915 12.2572 13.1231 12.5025 12.8126 12.8121C12.5022 13.1217 12.2557 13.4895 12.0873 13.8946C11.919 14.2996 11.832 14.7339 11.8314 15.1727C11.83 16.0589 12.1789 16.9098 12.8019 17.5394C13.4249 18.169 14.2713 18.5263 15.1565 18.5333C16.9883 18.5488 18.523 17.0192 18.5196 15.179H18.519Z"
                  stroke="white"
                  strokeWidth="0.7"
                />
              </svg>
              <span className="hover:text-[#00431a]">Rent an apartment</span>
            </div>
          </div>
        </div>
      </div>

      <SectionTwo />
    </>
  )
}
