import tw from "tailwind-styled-components";
import styled from "styled-components";
import media from "styled-media-query";

const ContainerNavbarCss = styled.div`
  ${media.greaterThan("medium")`
    background-color: transparent;
  `}
`;

const BorderRightGrayCss = styled.div`
  ${media.greaterThan("medium")`
    height: 4rem;
    border-right-width: 2px;
    border-color: #cbd5e0;
  `}
`;

export const Container = tw.div`
w-full h-full flex flex-col
`;

export const ContainerHeader = tw.div`
w-full h-full custom-background
`;

export const ContainerNavbar = tw(ContainerNavbarCss)`
w-full flex items-center justify-between bg-[#343236]
`;

export const NavbarPrimary = tw.div`
w-full flex items-center text-white gap-4
`;

export const ContainerLogo = tw.div`
  md:my-2 my-4 ml-4
`;

export const Logo = tw.img`
w-24 h-20
`;

export const BorderRightGray = tw(BorderRightGrayCss)``;
