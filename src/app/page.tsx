"use client";

import { ReactNode, useState } from "react";

export default function Home() {
  interface Cards {
    title: string;
    icon: ReactNode;
  }
  // const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Top Deals");

  const tabs = ["Trending", "Top Deals", "New Listings", "Price Lowered"];
  const [expandedCardIndex, setExpandedCardIndex] = useState<number | null>(
    null
  );
  const [selectedProducts, setSelectedProducts] = useState<Cards[]>([]);

  const [counter, setCounter] = useState(0);
  const handleClick = (productIndex: number) => {
    // Get the actual product object from your cards array
    const selectedProduct = cards[productIndex];

    // Add the product object to your selected products
    setSelectedProducts((prevSelected) => [...prevSelected, selectedProduct]);

    // Optionally increment counter if you still need it
    setCounter(counter + 1);
  };

  const toggleExpand = (index: number) => {
    if (expandedCardIndex === index) {
      // If clicking the already expanded card, collapse it
      setExpandedCardIndex(null);
    } else {
      // Otherwise expand the clicked card
      setExpandedCardIndex(index);
    }
  };

  const cards = [
    {
      title: "14” MacBook Pro w/ M3 Pro Chip 18GB RAM 512 GB SSD (A2992)",
      icon: (
        <svg
          width="14"
          height="17"
          viewBox="0 0 14 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.5529 5.79588C13.4531 5.87239 11.6922 6.85339 11.6922 9.0347C11.6922 11.5578 13.9329 12.4503 14 12.4724C13.9897 12.5269 13.644 13.6949 12.8186 14.885C12.0825 15.9323 11.3138 16.9779 10.1445 16.9779C8.97507 16.9779 8.67412 16.3063 7.32416 16.3063C6.0086 16.3063 5.54084 17 4.4712 17C3.40155 17 2.6552 16.0309 1.79708 14.8408C0.803095 13.4432 0 11.2721 0 9.21152C0 5.90639 2.17369 4.15352 4.31298 4.15352C5.4497 4.15352 6.39725 4.89139 7.11092 4.89139C7.7902 4.89139 8.84953 4.10931 10.1427 4.10931C10.6328 4.10931 12.3938 4.15352 13.5529 5.79588ZM9.5288 2.71007C10.0636 2.08271 10.442 1.21222 10.442 0.341734C10.442 0.221022 10.4316 0.0986099 10.4093 0C9.53912 0.0323032 8.50387 0.572957 7.87962 1.28873C7.38951 1.83958 6.93207 2.71007 6.93207 3.59246C6.93207 3.72507 6.95443 3.85769 6.96475 3.90019C7.01978 3.91039 7.1092 3.92229 7.19862 3.92229C7.97936 3.92229 8.96131 3.40544 9.5288 2.71007Z"
            fill="black"
          />
        </svg>
      ),
    },
    {
      title:
        "ROG Zephyrus G16 16” Core Ultra 9 185H 1TB SSD 16GB 16' (2560x1600) OLED 240Hz WIN11 NVIDIA RTX 4070 8192MB ECLIPSE GRAY RGB Backlit Keyboard (GU605MI-G16.U94070)",
      icon: (
        <svg
          width="27"
          height="5"
          viewBox="0 0 27 5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M26.892 1.27724V0H21.654C20.5605 0 20.0678 0.605327 19.9868 1.19249V1.21065V0H18.4478V1.27724H19.98H26.892ZM19.98 1.73729L18.441 1.6586V3.12954C18.441 3.58959 18.1845 3.72881 17.2935 3.72881H16.065C15.3292 3.72881 15.0188 3.54116 15.0188 3.12954V1.51937L13.4595 1.41646V3.24455H13.4257C13.338 2.71186 13.1153 2.09443 11.6302 2.00363L6.75 1.71308C6.75 2.38499 7.28325 2.7845 8.12025 2.8632L11.5222 3.17191C11.7922 3.19007 11.988 3.26271 11.988 3.46247C11.988 3.68039 11.7855 3.7046 11.475 3.7046H6.68925V1.71308L5.13 1.62228V5H11.4818C12.8993 5 13.3515 4.34019 13.419 3.78935H13.4528C13.6283 4.66102 14.4787 5 15.9165 5H17.5028C19.1835 5 19.98 4.53995 19.98 3.46247V1.73729ZM24.9278 1.99758L20.0475 1.73729C20.0475 2.4092 20.5403 2.85714 21.3773 2.91768L24.8535 3.15981C25.1235 3.17797 25.2855 3.2385 25.2855 3.43826C25.2855 3.62591 25.0965 3.69855 24.705 3.69855H19.9665V5H24.8062C26.3317 5 27 4.52179 27 3.4322C27 2.45157 26.3993 2.08232 24.9278 1.99758ZM13.4595 0H15.0188V1.27724H13.4595V0ZM4.27275 1.56174L2.5785 1.41041L0 5H1.89675L4.27275 1.56174ZM13.176 0H8.41725C7.31025 0 6.82425 0.617433 6.7095 1.21065V0H4.07025C3.699 0 3.5235 0.102906 3.348 0.33293L2.619 1.27724H13.176V0Z"
            fill="black"
          />
        </svg>
      ),
    },
    {
      title:
        "Alienware m16 R2 GAMING Core Ultra 7 155H 1TB SSD 16GB 16' (2560x1600) 3ms 240Hz WIN11 NVIDIA® RTX 4060 8192MB DARK METALLIC MOON Backlit Keyboard (INS0176620-R0025132-SA)",
      icon: (
        <svg
          width="27"
          height="5"
          viewBox="0 0 27 5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M26.892 1.27724V0H21.654C20.5605 0 20.0678 0.605327 19.9868 1.19249V1.21065V0H18.4478V1.27724H19.98H26.892ZM19.98 1.73729L18.441 1.6586V3.12954C18.441 3.58959 18.1845 3.72881 17.2935 3.72881H16.065C15.3292 3.72881 15.0188 3.54116 15.0188 3.12954V1.51937L13.4595 1.41646V3.24455H13.4257C13.338 2.71186 13.1153 2.09443 11.6302 2.00363L6.75 1.71308C6.75 2.38499 7.28325 2.7845 8.12025 2.8632L11.5222 3.17191C11.7922 3.19007 11.988 3.26271 11.988 3.46247C11.988 3.68039 11.7855 3.7046 11.475 3.7046H6.68925V1.71308L5.13 1.62228V5H11.4818C12.8993 5 13.3515 4.34019 13.419 3.78935H13.4528C13.6283 4.66102 14.4787 5 15.9165 5H17.5028C19.1835 5 19.98 4.53995 19.98 3.46247V1.73729ZM24.9278 1.99758L20.0475 1.73729C20.0475 2.4092 20.5403 2.85714 21.3773 2.91768L24.8535 3.15981C25.1235 3.17797 25.2855 3.2385 25.2855 3.43826C25.2855 3.62591 25.0965 3.69855 24.705 3.69855H19.9665V5H24.8062C26.3317 5 27 4.52179 27 3.4322C27 2.45157 26.3993 2.08232 24.9278 1.99758ZM13.4595 0H15.0188V1.27724H13.4595V0ZM4.27275 1.56174L2.5785 1.41041L0 5H1.89675L4.27275 1.56174ZM13.176 0H8.41725C7.31025 0 6.82425 0.617433 6.7095 1.21065V0H4.07025C3.699 0 3.5235 0.102906 3.348 0.33293L2.619 1.27724H13.176V0Z"
            fill="black"
          />
        </svg>
      ),
    },
    {
      title:
        "Alienware m16 R2 GAMING Core Ultra 7 155H 1TB SSD 16GB 16' (2560x1600) 3ms 240Hz WIN11 NVIDIA® RTX 4060 8192MB DARK METALLIC MOON Backlit Keyboard (INS0176620-R0025132-SA)",
      icon: (
        <svg
          width="27"
          height="5"
          viewBox="0 0 27 5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M26.892 1.27724V0H21.654C20.5605 0 20.0678 0.605327 19.9868 1.19249V1.21065V0H18.4478V1.27724H19.98H26.892ZM19.98 1.73729L18.441 1.6586V3.12954C18.441 3.58959 18.1845 3.72881 17.2935 3.72881H16.065C15.3292 3.72881 15.0188 3.54116 15.0188 3.12954V1.51937L13.4595 1.41646V3.24455H13.4257C13.338 2.71186 13.1153 2.09443 11.6302 2.00363L6.75 1.71308C6.75 2.38499 7.28325 2.7845 8.12025 2.8632L11.5222 3.17191C11.7922 3.19007 11.988 3.26271 11.988 3.46247C11.988 3.68039 11.7855 3.7046 11.475 3.7046H6.68925V1.71308L5.13 1.62228V5H11.4818C12.8993 5 13.3515 4.34019 13.419 3.78935H13.4528C13.6283 4.66102 14.4787 5 15.9165 5H17.5028C19.1835 5 19.98 4.53995 19.98 3.46247V1.73729ZM24.9278 1.99758L20.0475 1.73729C20.0475 2.4092 20.5403 2.85714 21.3773 2.91768L24.8535 3.15981C25.1235 3.17797 25.2855 3.2385 25.2855 3.43826C25.2855 3.62591 25.0965 3.69855 24.705 3.69855H19.9665V5H24.8062C26.3317 5 27 4.52179 27 3.4322C27 2.45157 26.3993 2.08232 24.9278 1.99758ZM13.4595 0H15.0188V1.27724H13.4595V0ZM4.27275 1.56174L2.5785 1.41041L0 5H1.89675L4.27275 1.56174ZM13.176 0H8.41725C7.31025 0 6.82425 0.617433 6.7095 1.21065V0H4.07025C3.699 0 3.5235 0.102906 3.348 0.33293L2.619 1.27724H13.176V0Z"
            fill="black"
          />
        </svg>
      ),
    },
    {
      title:
        "Alienware m16 R2 GAMING Core Ultra 7 155H 1TB SSD 16GB 16' (2560x1600) 3ms 240Hz WIN11 NVIDIA® RTX 4060 8192MB DARK METALLIC MOON Backlit Keyboard (INS0176620-R0025132-SA)",
      icon: (
        <svg
          width="27"
          height="5"
          viewBox="0 0 27 5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M26.892 1.27724V0H21.654C20.5605 0 20.0678 0.605327 19.9868 1.19249V1.21065V0H18.4478V1.27724H19.98H26.892ZM19.98 1.73729L18.441 1.6586V3.12954C18.441 3.58959 18.1845 3.72881 17.2935 3.72881H16.065C15.3292 3.72881 15.0188 3.54116 15.0188 3.12954V1.51937L13.4595 1.41646V3.24455H13.4257C13.338 2.71186 13.1153 2.09443 11.6302 2.00363L6.75 1.71308C6.75 2.38499 7.28325 2.7845 8.12025 2.8632L11.5222 3.17191C11.7922 3.19007 11.988 3.26271 11.988 3.46247C11.988 3.68039 11.7855 3.7046 11.475 3.7046H6.68925V1.71308L5.13 1.62228V5H11.4818C12.8993 5 13.3515 4.34019 13.419 3.78935H13.4528C13.6283 4.66102 14.4787 5 15.9165 5H17.5028C19.1835 5 19.98 4.53995 19.98 3.46247V1.73729ZM24.9278 1.99758L20.0475 1.73729C20.0475 2.4092 20.5403 2.85714 21.3773 2.91768L24.8535 3.15981C25.1235 3.17797 25.2855 3.2385 25.2855 3.43826C25.2855 3.62591 25.0965 3.69855 24.705 3.69855H19.9665V5H24.8062C26.3317 5 27 4.52179 27 3.4322C27 2.45157 26.3993 2.08232 24.9278 1.99758ZM13.4595 0H15.0188V1.27724H13.4595V0ZM4.27275 1.56174L2.5785 1.41041L0 5H1.89675L4.27275 1.56174ZM13.176 0H8.41725C7.31025 0 6.82425 0.617433 6.7095 1.21065V0H4.07025C3.699 0 3.5235 0.102906 3.348 0.33293L2.619 1.27724H13.176V0Z"
            fill="black"
          />
        </svg>
      ),
    },
  ];

  return (
    <>
      <div className="flex flex-row bg-[#0D0D0D] font-Lato">
        <div className="pt-3 px-2 border-r-2 border-[#1E2127] bg-[#0D0D0D]">
          <svg
            width="28"
            height="29"
            viewBox="0 0 28 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24.0082 9.09158C24.5264 9.61497 26.0809 9.09158 27.1172 9.09158C28.1535 8.56818 27.1172 3.33422 27.1172 0.542781C24.0082 0.542781 18.8266 -0.678476 18.3084 0.542781C18.3084 1.58957 17.7903 2.98529 18.3084 3.68316C18.8266 4.38102 20.2084 3.68316 21.2447 3.68316C-1.6472e-06 26.3636 0 23.5722 0 25.1424C1.38177 28.2828 -0.518163 26.3636 2.59082 27.7594C3.97258 27.7594 1.20905 27.7594 24.0082 6.12567C24.0082 7.34693 23.4901 8.39372 24.0082 9.09158ZM18.6539 28.4572C19.3448 29.6785 24.6991 28.4572 27.4626 28.4572C27.4626 25.6658 28.6717 20.4318 27.4626 19.9084C26.4263 19.9084 25.0445 19.385 24.3537 19.9084C23.6628 20.4318 24.3537 21.4786 24.3537 22.8743C15.8903 15.1979 17.963 15.1979 17.0994 15.1979C16.2358 15.1979 14.5086 17.117 14.5086 17.9893C14.5086 18.8616 14.5086 16.5936 21.9356 25.4913C20.8992 25.4913 19.5175 24.9679 18.8266 25.4913C18.1357 26.0147 18.8266 27.236 18.6539 28.4572ZM0.863605 3.50869C0.863605 4.03209 0.863605 2.81083 10.0178 12.5809C10.8814 12.4064 11.9178 11.1852 12.2632 10.3128C2.59082 1.24064 3.79986 1.24064 3.10898 1.24064C0.518163 2.63636 2.24537 0.891711 0.863605 3.50869Z"
              fill="#5533FF"
            />
          </svg>
        </div>
        <div className="flex flex-col w-full  ">
          <div className="flex flex-wrap justify-between items-center px-4 py-3 border-b border-[#1C1F24] bg-[#0D0D0D]">
            {/* Search Bar */}
            <div className="flex items-center bg-[#171717] text-[#787E8E] rounded-bl-[10px] rounded-br-[20px] rounded-tl-[10px] rounded-tr-[10px] px-2 py-2 w-full sm:w-[346px]">
              <div className="border-r-2 border-[#222C35] pr-2 flex items-center">
                <svg
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.75 15.19L11.4875 11.9275M13.25 7.69C13.25 11.0037 10.5637 13.69 7.25 13.69C3.93629 13.69 1.25 11.0037 1.25 7.69C1.25 4.37629 3.93629 1.69 7.25 1.69C10.5637 1.69 13.25 4.37629 13.25 7.69Z"
                    stroke="#797F8F"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search all deals"
                className="flex-grow outline-none bg-transparent px-2 w-full"
              />
            </div>

            {/* Login and Signup Buttons */}
            <div className="flex flex-row sm:flex-row md:flex-row gap-2 ">
              <button className="bg-[#5533FF] text-white px-4 py-2 rounded-r-[5px] font-Lato rounded-l-[10px] font-semibold hover:bg-[#423b74] w-full sm:w-[96px]">
                Signup
              </button>
              <button className="bg-[#5533FF] text-white px-4 py-2 rounded-l-[5px] rounded-r-[10px] font-semibold hover:bg-[#423b74] w-full sm:w-[96px]">
                Login
              </button>
            </div>
          </div>

          <div className="flex flex-col border-b-1 border-[#1C1F24] bg-[#111111] min-h-[34px] ">
            <div className="flex flex-row justify-between px-4 py-3">
              <div className="flex flex-row justify-center">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 text-[#787E8E] font-medium  relative transition-all duration-200 hover:bg-[#382C7E]
            ${activeTab === tab ? "text-white bg-[#332288] rounded-t-lg" : ""}
          `}
                  >
                    {tab}
                    {activeTab === tab && (
                      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#332288]" />
                    )}
                  </button>
                ))}
              </div>
              <div className="text-[#787E8E] font-Lato font-semibold text-sm">
                Order history
              </div>
            </div>
            <div className="flex flex-row justify-between px-4 bg-[#0D0D0D] py-2">
              <div className="flex flex-row gap-2">
                <button className="flex flex-row items-center px-6 gap-4 py-1 rounded-2xl border-[2px] border-[#1C1F24]">
                  <p className="text-[#787E8E] font-Lato font-semibold  text-sm">
                    Most Quality
                  </p>
                  <svg
                    width="10"
                    height="30"
                    viewBox="0 0 8 5"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 1L4 4L1 1"
                      stroke="#787E8E"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <button className="flex flex-row items-center px-6 gap-4 py-1 rounded-2xl border-[2px] border-[#1C1F24]">
                  <svg
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.75 15.19L11.4875 11.9275M13.25 7.69C13.25 11.0037 10.5637 13.69 7.25 13.69C3.93629 13.69 1.25 11.0037 1.25 7.69C1.25 4.37629 3.93629 1.69 7.25 1.69C10.5637 1.69 13.25 4.37629 13.25 7.69Z"
                      stroke="#797F8F"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <input
                    type="text"
                    placeholder="Search 923 items"
                    className="flex-grow outline-none bg-transparent font-Lato text-sm text-white px-2 w-full"
                  />
                </button>
                <button className="flex flex-row items-center px-6 gap-4 py-1 rounded-2xl border-[2px] border-[#1C1F24]">
                  <svg
                    width="18"
                    height="22"
                    viewBox="0 0 13 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.51652 13.1039L10.9843 11.0707C11.3545 10.8536 11.5392 10.7451 11.6738 10.5932C11.7929 10.4589 11.883 10.3007 11.938 10.1287C12 9.93487 12 9.71824 12 9.28617V5.21369C12 4.78162 12 4.56502 11.938 4.37116C11.883 4.19924 11.7929 4.04087 11.6738 3.90653C11.5398 3.75536 11.3555 3.64729 10.9885 3.43211L7.5159 1.39603C7.14571 1.17897 6.96099 1.07067 6.76421 1.02819C6.5901 0.990604 6.41009 0.990604 6.23598 1.02819C6.03919 1.07067 5.85385 1.17897 5.48367 1.39603L2.01525 3.42968C1.6455 3.64648 1.46076 3.75479 1.32623 3.90653C1.20712 4.04087 1.11717 4.19924 1.06217 4.37116C1 4.56547 1 4.78264 1 5.21675V9.28329C1 9.7174 1 9.93442 1.06217 10.1287C1.11717 10.3007 1.20712 10.4589 1.32623 10.5932C1.46084 10.7451 1.64571 10.8536 2.0159 11.0707L5.48367 13.1039C5.85385 13.321 6.0392 13.4293 6.23598 13.4718C6.41009 13.5094 6.5901 13.5094 6.76421 13.4718C6.96099 13.4293 7.14634 13.321 7.51652 13.1039Z"
                      stroke="#787E8E"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4.59472 7.24993C4.59472 8.31856 5.44774 9.18486 6.5 9.18486C7.55226 9.18486 8.40528 8.31856 8.40528 7.24993C8.40528 6.1813 7.55226 5.31501 6.5 5.31501C5.44774 5.31501 4.59472 6.1813 4.59472 7.24993Z"
                      stroke="#787E8E"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <p className="text-[#787E8E] font-Lato text-sm font-semibold">
                    Filter (43)
                  </p>
                </button>
              </div>
              <div className="flex flex-row gap-2">
                <button className="rounded-xl p-2 border-2 border-[#1C1F24]">
                  <svg
                    width="18"
                    height="16"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 3.17399C5.66667 -0.0615109 1 0.2831 1 4.41844C1 8.55379 7 12 7 12C7 12 13 8.55379 13 4.41844C13 0.2831 8.33333 -0.0615109 7 3.17399Z"
                      stroke="#787E8E"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <button className="rounded-xl p-2 border-2 border-[#1C1F24]">
                  <svg
                    width="18"
                    height="16"
                    viewBox="0 0 11 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.49994 7V11M5.49994 11L7.42848 9.66667M5.49994 11L3.57139 9.66667M6.14279 1.00058C6.0814 1 6.01247 1 5.93368 1H3.05724C2.33718 1 1.97689 1 1.70186 1.14532C1.45994 1.27316 1.2634 1.47698 1.14013 1.72786C1 2.01308 1 2.38673 1 3.13346V10.8668C1 11.6135 1 11.9867 1.14013 12.2719C1.2634 12.5228 1.45994 12.727 1.70186 12.8548C1.97662 13 2.33648 13 3.05513 13H7.94475C8.6634 13 9.02274 13 9.2975 12.8548C9.53941 12.727 9.73662 12.5228 9.85988 12.2719C9.99987 11.987 9.99987 11.6143 9.99987 10.8691V5.21712C9.99987 5.13531 9.99986 5.06374 9.99927 5M6.14279 1.00058C6.32641 1.00231 6.44257 1.00923 6.55346 1.03684C6.68465 1.0695 6.80997 1.12351 6.925 1.19661C7.05471 1.27904 7.16608 1.39455 7.3883 1.625L9.39752 3.70866C9.61988 3.93926 9.73044 4.05424 9.80995 4.1888C9.88044 4.30809 9.9326 4.43817 9.96409 4.57422C9.9907 4.68917 9.99753 4.80967 9.99927 5M6.14279 1.00058V2.86667C6.14279 3.6134 6.14279 3.98651 6.28292 4.27173C6.40618 4.52261 6.60273 4.72699 6.84465 4.85482C7.1194 5 7.47927 5 8.19792 5H9.99927M9.99927 5H10"
                      stroke="#787E8E"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-row h-auto justify-between gap-2 ">
            <div className=" w-3/4 border-[#1C1F24] border-t-[2px] bg-[#0D0D0D] overflow-auto   ">
              {cards.map((card, index) => (
                <div
                  key={index}
                  className={`w-${
                    expandedCardIndex === index ? "8/9" : "full"
                  } flex flex-row justify-between mb-10 transition-all duration-300 ease-in-out`}
                >
                  <div
                    className="h-[91px] py-4 w-6/7 bg-[#0D0D0D] flex flex-row gap-2 px-2  border-[#1C1F24] border-b-[2px] "
                    onClick={() => toggleExpand(index)}
                  >
                    <div className="w-[48px] h-[46px] bg-white flex items-center justify-center rounded-lg">
                      {card.icon}
                    </div>
                    <div className="w-full flex flex-col items-start">
                      <p className="font-Lato font-semibold text-white text-sm ">
                        {card.title}
                      </p>
                      <div className="flex flex-row gap-20">
                        <div
                          className={`bg-white flex flex-row items-center gap-2 h-[16px] px-2 rounded-full ml-[-2rem] font-Lato text-[#5533FF] ${
                            index == 0 ? "mt-12" : "mt-7"
                          }`}
                        >
                          <div className="ml-[-1rem]">
                            <svg
                              width="16"
                              height="18"
                              viewBox="0 0 12 14"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M6 0C5.885 0 5.77 0.0274941 5.665 0.0797329L0.957509 2.27651C0.407511 2.53221 -0.00248814 3.12883 1.14441e-05 3.84918C0.0125113 6.57659 1.03251 11.5668 5.34 13.835C5.7575 14.055 6.2425 14.055 6.66 13.835C10.9675 11.5668 11.9875 6.57659 12 3.84918C12.0025 3.12883 11.5925 2.53221 11.0425 2.27651L6.3325 0.0797329C6.23 0.0274941 6.115 0 6 0Z"
                                fill="#5533FF"
                              />
                            </svg>
                          </div>
                          <p className="text-xs font-Lato">
                            1Y Manufacturer Warranty
                          </p>
                        </div>
                        <div
                          className={`bg-white flex flex-row items-center gap-2 h-[16px] px-2 rounded-full ml-[-3rem] font-Lato text-[#5533FF] ${
                            index == 0 ? "mt-12" : "mt-7"
                          }`}
                        >
                          <div className="ml-[-0.9rem]">
                            <svg
                              width="16"
                              height="18"
                              viewBox="0 0 11 14"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8.69558 1.22022C8.8492 0.845628 8.73464 0.408143 8.4196 0.167527C8.10457 -0.0730899 7.67497 -0.0512156 7.38076 0.216744L0.715536 6.34153C0.455176 6.58214 0.361446 6.96768 0.483815 7.30673C0.606185 7.64578 0.918617 7.87546 1.2649 7.87546H4.16792L2.16574 12.7808C2.01213 13.1553 2.12669 13.5928 2.44173 13.8335C2.75676 14.0741 3.18636 14.0522 3.48056 13.7842L10.1458 7.65945C10.4062 7.41883 10.4999 7.0333 10.3775 6.69425C10.2551 6.3552 9.94531 6.12825 9.59643 6.12825H6.69341L8.69558 1.22022Z"
                                fill="#607EF6"
                              />
                            </svg>
                          </div>
                          <p className="text-xs font-Lato">New</p>
                        </div>
                        <div
                          className={`bg-white flex flex-row items-center gap-2 h-[16px] px-2 rounded-full ml-[-3rem] font-Lato text-[#5533FF] ${
                            index == 0 ? "mt-12" : "mt-7"
                          }`}
                        >
                          <div className="ml-[-1.2rem]">
                            <svg
                              width="20"
                              height="24"
                              viewBox="0 0 16 13"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M16 0V10.1562C16 11.7279 14.7318 13 13.1648 13C11.6206 13 10.3676 11.7635 10.3296 10.2248L1.02404 12.7689C0.591161 12.8857 0.14816 12.6318 0.0291822 12.1977C-0.0897952 11.7635 0.16588 11.3191 0.598755 11.1998L8.70947 8.9832V1.625C8.70947 0.728711 9.43599 0 10.3296 0H16ZM14.3799 10.1562C14.3799 9.83302 14.2519 9.52302 14.024 9.29446C13.7961 9.0659 13.4871 8.9375 13.1648 8.9375C12.8425 8.9375 12.5335 9.0659 12.3056 9.29446C12.0777 9.52302 11.9497 9.83302 11.9497 10.1562C11.9497 10.4795 12.0777 10.7895 12.3056 11.018C12.5335 11.2466 12.8425 11.375 13.1648 11.375C13.4871 11.375 13.7961 11.2466 14.024 11.018C14.2519 10.7895 14.3799 10.4795 14.3799 10.1562ZM0.383583 5.27363C0.267137 4.83945 0.525343 4.39512 0.955687 4.27832L2.13027 3.96348L2.65428 5.92617C2.7125 6.14199 2.93527 6.27148 3.15044 6.21309L3.93265 6.00234C4.14783 5.94394 4.27693 5.72051 4.21871 5.50469L3.6947 3.54199L4.86928 3.22715C5.30216 3.11035 5.74516 3.36934 5.86161 3.80098L6.90962 7.72383C7.02607 8.15801 6.76786 8.60234 6.33752 8.71914L2.42392 9.77285C1.99104 9.88965 1.54804 9.63066 1.4316 9.19902L0.383583 5.27363Z"
                                fill="#609CF6"
                              />
                            </svg>
                          </div>
                          <p className="text-xs font-Lato">124H</p>
                        </div>
                        <div
                          className={`bg-white flex flex-row items-center gap-2 h-[16px] px-2 rounded-full ml-[-3rem] font-Lato text-[#5533FF] ${
                            index == 0 ? "mt-12" : "mt-7"
                          }`}
                        >
                          <div className="ml-[-1.2rem]">
                            <svg
                              width="16"
                              height="18"
                              viewBox="0 0 14 14"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M7.58789 0.103306C7.20781 -0.0344353 6.79219 -0.0344353 6.40937 0.103306L1.15938 1.99311C0.464844 2.2438 0 2.90771 0 3.65427V10.3457C0 11.0895 0.464844 11.7562 1.16211 12.0069L6.41211 13.8967C6.79219 14.0344 7.20781 14.0344 7.59063 13.8967L12.8406 12.0069C13.5352 11.7534 14 11.0895 14 10.343V3.65427C14 2.91047 13.5352 2.2438 12.8379 1.99311L7.58789 0.103306ZM7 1.76446L11.7496 3.47245L7 5.18044L2.25039 3.47245L7 1.76446ZM6.125 11.9187L1.75 10.3457V5.16667L6.125 6.73967V11.9187Z"
                                fill="#756FC2"
                              />
                            </svg>
                          </div>
                          <p className="text-xs font-Lato">Branded</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-1/7 bg-[#1C1F24] flex flex-col gap-4 text-white font-Lato rounded-l-2xl">
                    <div className="flex flex-col items-start text-white mr-2 px-2">
                      <div className="flex flex-col items-start w-full">
                        <p className="text-[#565C67] text-xs  font-bold">
                          QUANTITY
                        </p>
                        <div className="border-[#2F343D] border-2 px-4  rounded-xl text-center w-full">
                          <span className="text-xs">18</span>
                        </div>
                      </div>
                      <div className="flex flex-col items-start w-full mb-[4px]">
                        <p className="text-[#565C67] text-sx font-bold ">
                          Price
                        </p>
                        <div className="bg-[#2F343D] px-4  rounded-xl text-center w-full ">
                          <span className="text-xs">$1000</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {expandedCardIndex === index && (
                    <div className=" w-[8rem] bg-[#1C1F24] flex flex-row gap-1 justify-center ">
                      <div className="flex flex-col items-center justify-center gap-1">
                        <button className="flex items-center justify-center w-[65px] h-full bg-[#5533FF] rounded-bl-[5px] rounded-br-[5px] rounded-tl-[5px] rounded-tr-[10px]">
                          <svg
                            width="20"
                            height="24"
                            viewBox="0 0 16 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16 0V10.1562C16 11.7279 14.7318 13 13.1648 13C11.6206 13 10.3676 11.7635 10.3296 10.2248L1.02404 12.7689C0.591161 12.8857 0.14816 12.6318 0.0291822 12.1977C-0.0897952 11.7635 0.16588 11.3191 0.598755 11.1998L8.70947 8.9832V1.625C8.70947 0.728711 9.43599 0 10.3296 0H16ZM14.3799 10.1562C14.3799 9.83302 14.2519 9.52302 14.024 9.29446C13.7961 9.0659 13.4871 8.9375 13.1648 8.9375C12.8425 8.9375 12.5335 9.0659 12.3056 9.29446C12.0777 9.52302 11.9497 9.83302 11.9497 10.1562C11.9497 10.4795 12.0777 10.7895 12.3056 11.018C12.5335 11.2466 12.8425 11.375 13.1648 11.375C13.4871 11.375 13.7961 11.2466 14.024 11.018C14.2519 10.7895 14.3799 10.4795 14.3799 10.1562ZM0.383583 5.27363C0.267137 4.83945 0.525343 4.39512 0.955687 4.27832L2.13027 3.96348L2.65428 5.92617C2.7125 6.14199 2.93527 6.27148 3.15044 6.21309L3.93265 6.00234C4.14783 5.94394 4.27693 5.72051 4.21871 5.50469L3.6947 3.54199L4.86928 3.22715C5.30216 3.11035 5.74516 3.36934 5.86161 3.80098L6.90962 7.72383C7.02607 8.15801 6.76786 8.60234 6.33752 8.71914L2.42392 9.77285C1.99104 9.88965 1.54804 9.63066 1.4316 9.19902L0.383583 5.27363Z"
                              fill="white"
                            />
                          </svg>
                        </button>
                        <button className=" flex items-center justify-center w-[65px] h-full bg-[#5533FF] rounded-bl-[5px] rounded-br-[5px] rouneded-tl-[5px] rounded-tr-[10px]">
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 11 9"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5.5 2.08108C4.5 -0.272008 1 -0.0213821 1 2.98614C1 5.99366 5.5 8.5 5.5 8.5C5.5 8.5 10 5.99366 10 2.98614C10 -0.0213821 6.5 -0.272008 5.5 2.08108Z"
                              stroke="white"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                      </div>
                      <button
                        className=" flex items-center justify-center w-full h-full bg-[#5533FF] rounded-bl-[5px] rounded-br-[5px] rouneded-tl-[5px] rounded-tr-[10px]"
                        onClick={() => handleClick(index)}
                      >
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 9 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.81165 4.47065C9.06278 4.21033 9.06278 3.78758 8.81165 3.52727L5.59719 0.195236C5.34606 -0.0650787 4.93822 -0.0650787 4.68709 0.195236C4.43596 0.455551 4.43596 0.878303 4.68709 1.13862L6.80663 3.33359H0.642893C0.287293 3.33359 0 3.63139 0 4C0 4.36861 0.287293 4.66641 0.642893 4.66641H6.80462L4.6891 6.86138C4.43797 7.1217 4.43797 7.54445 4.6891 7.80476C4.94023 8.06508 5.34807 8.06508 5.5992 7.80476L8.81366 4.47273L8.81165 4.47065Z"
                            fill="white"
                          />
                        </svg>
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className=" w-1/4  border-1 border-[#1C1F24] rounded-lg flex flex-col gap-2 pl-6 pt-6">
              <h1 className="text-Lato text-2xl font-semibold text-white ">
                Cart
              </h1>
              <p className="text-Lato text-md text-[#787E8E]">
                Items Selected: {counter}
              </p>
              <div className="flex flex-col gap-2 border-l-1 border-t-1 rounded-md border-[#1C1F24] min-h-[20rem] max-h-[20rem] overflow-y-auto">
                {selectedProducts.map((product, index) => (
                  <div className="flex flex-row gap-2 p-2" key={index}>
                    <div className="bg-white w-[60px] h-[49px] flex items-center justify-center rounded-md">
                      {product.icon} {/* Use the product's icon */}
                    </div>
                    <h1 className="text-Lato text-xs text-[#787E8E]">
                      {product.title} {/* Use the product's title */}
                    </h1>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-2 border-l-1 border-t-1 rounded-md border-[#1C1F24] h-full">
                <h1 className="text-Lato text-2xl font-semibold text-white p-6 ">
                  Recomended
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-[#0D0D0D] flex items-center justify-start pl-16 h-8 border-t-2 border-[#1C1F24]">
        <svg
          width="18"
          height="18"
          viewBox="0 0 13 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.0529 1.88906C9.83705 0.670312 8.21786 0 6.4971 0C2.94531 0 0.0551339 2.89018 0.0551339 6.44196C0.0551339 7.57656 0.351116 8.68504 0.914062 9.66295L0 13L3.4154 12.1033C4.35558 12.617 5.41473 12.8868 6.4942 12.8868H6.4971C10.046 12.8868 13 9.99665 13 6.44487C13 4.72411 12.2687 3.10781 11.0529 1.88906ZM6.4971 11.8016C5.53371 11.8016 4.59062 11.5433 3.76942 11.0558L3.575 10.9397L1.54955 11.4708L2.08929 9.49464L1.96161 9.29152C1.42478 8.43839 1.1433 7.45469 1.1433 6.44196C1.1433 3.49085 3.54598 1.08817 6.5 1.08817C7.93058 1.08817 9.27411 1.64531 10.2839 2.65804C11.2937 3.67076 11.9147 5.01429 11.9118 6.44487C11.9118 9.39888 9.44821 11.8016 6.4971 11.8016ZM9.43371 7.79129C9.27411 7.71004 8.48192 7.32121 8.33393 7.26897C8.18594 7.21384 8.07857 7.18772 7.97121 7.35022C7.86384 7.51272 7.55625 7.87254 7.46049 7.98281C7.36763 8.09018 7.27187 8.10469 7.11228 8.02344C6.16629 7.55045 5.54531 7.17902 4.92143 6.10826C4.75603 5.82388 5.08683 5.8442 5.39442 5.22902C5.44665 5.12165 5.42054 5.02879 5.37991 4.94754C5.33929 4.86629 5.01719 4.07411 4.88371 3.75201C4.75312 3.43862 4.61964 3.48214 4.52098 3.47634C4.42812 3.47054 4.32076 3.47054 4.21339 3.47054C4.10603 3.47054 3.93192 3.51116 3.78393 3.67076C3.63594 3.83326 3.22098 4.2221 3.22098 5.01429C3.22098 5.80647 3.79844 6.57254 3.87679 6.67991C3.95804 6.78728 5.01138 8.41228 6.62768 9.11161C7.64911 9.55268 8.04955 9.5904 8.56027 9.51495C8.87076 9.46853 9.51205 9.12612 9.64554 8.74888C9.77902 8.37165 9.77902 8.04955 9.73839 7.98281C9.70067 7.91027 9.5933 7.86964 9.43371 7.79129Z"
            fill="#3C4047"
          />
        </svg>
      </footer>
    </>
  );
}
