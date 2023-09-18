import tw from "tailwind-styled-components";

export const Container = tw.div`
flex w-full h-full flex-col
`;

export const ContainerHeader = tw.div`
w-full h-full custom-background pb-6
`;

export const ContainerNavbar = tw.div`
flex items-center justify-between bg-[#343236] md:bg-transparent w-full
`;

export const NavbarPrimary = tw.div`
w-full text-white flex items-center gap-8
`;

export const ContainerLogo = tw.div`
  md:py-2 py-4 pl-4
`;

export const Logo = tw.img`
w-24 h-20
`;

export const BorderRightGray = tw.div`
md:h-16 md:border-r-2 md:border-gray-400
`;
