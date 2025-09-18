// =======================================================================
// FILE 2: /components/components_user/sidebar.tsx (The NEW Gemini-Style Sidebar)
// =======================================================================
// INSTRUCTIONS: Replace the entire content of your sidebar.tsx file with this code.

"use client";
import NextLink from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeadset,
  faClockRotateLeft,
  faCircleInfo,
  faBook,
  faFileLines,
  faChevronLeft,
  faThumbtack,
} from "@fortawesome/free-solid-svg-icons";
import ModalLogout from "./modalLogout";
import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  Button,
  ScrollShadow,
  Tooltip,
} from "@heroui/react";
import ModalFeedback from "./modalFeedback";
import ModalInfographic from "./modalInfographic";

interface SidebarProps {
  isPinned: boolean;
  setIsPinned: (pinned: boolean) => void;
}

// --- Reusable component for the full expanded menu content ---
const ExpandedMenu = ({ onLinkClick }: { onLinkClick?: () => void }) => (
  <div className="mx-2 text-white">
    <Accordion showDivider={false} selectionMode="multiple" defaultExpandedKeys={["1", "2", "3", "4"]}>
      <AccordionItem
        key="1"
        aria-label="Catalog"
        title={<p className="font-semibold text-white">Catalog</p>}
        startContent={<FontAwesomeIcon icon={faBook} />}
        indicator={({ isOpen }) => <FontAwesomeIcon icon={isOpen ? faChevronLeft : faChevronLeft} className="text-white" />}
      >
        <div className="pl-8 flex flex-col space-y-2 text-sm">
          <NextLink href="/user/books" onClick={onLinkClick} className="text-white hover:font-bold">Books</NextLink>
          <NextLink href="/user/journals" onClick={onLinkClick} className="text-white hover:font-bold">Journals</NextLink>
        </div>
      </AccordionItem>
      <AccordionItem
        key="2"
        aria-label="Services"
        title={<p className="font-semibold text-white">Services</p>}
        startContent={<FontAwesomeIcon icon={faHeadset} />}
        indicator={({ isOpen }) => <FontAwesomeIcon icon={isOpen ? faChevronLeft : faChevronLeft} className="text-white" />}
      >
         <div className="pl-8 flex flex-col space-y-2 text-sm">
           <NextLink href="/user/room-reservation" onClick={onLinkClick} className="text-white hover:font-bold">Room Reservation</NextLink>
           <NextLink href="/user/journal-upload" onClick={onLinkClick} className="text-white hover:font-bold">Upload Journal</NextLink>
           <NextLink href="/user/lecture-book-upload" onClick={onLinkClick} className="text-white hover:font-bold">Upload Lecture's Book</NextLink>
         </div>
      </AccordionItem>
       <AccordionItem
        key="3"
        aria-label="Infographics"
        title={<p className="font-semibold text-white">Infographics</p>}
        startContent={<FontAwesomeIcon icon={faCircleInfo} />}
        indicator={({ isOpen }) => <FontAwesomeIcon icon={isOpen ? faChevronLeft : faChevronLeft} className="text-white" />}
       >
         <div className="pl-8 flex flex-col space-y-2 text-sm text-white hover:font-bold">
           <ModalInfographic name="Books Borrowing" imgURL="/assets/image/kampus-jakartaA.png" />
         </div>
      </AccordionItem>
      <AccordionItem
        key="4"
        aria-label="History"
        title={<p className="font-semibold text-white">History</p>}
        startContent={<FontAwesomeIcon icon={faClockRotateLeft} />}
        indicator={({ isOpen }) => <FontAwesomeIcon icon={isOpen ? faChevronLeft : faChevronLeft} className="text-white" />}
      >
        <div className="pl-8 flex flex-col space-y-2 text-sm">
          <NextLink href="/user/history" onClick={onLinkClick} className="text-white hover:font-bold">View History</NextLink>
        </div>
      </AccordionItem>
    </Accordion>
  </div>
);

// --- Main Sidebar Component ---
export default function Sidebar({ isPinned, setIsPinned }: SidebarProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const showExpanded = isPinned || isHovered;

  return (
    <>
      {/* ======================= DESKTOP SIDEBAR (Hover/Pin) ======================= */}
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`hidden lg:flex fixed top-0 left-0 h-full z-40 flex-col justify-between bg-dark-red shadow-lg transition-all duration-300 ease-in-out ${showExpanded ? "w-72" : "w-20"}`}
      >
        <div>
          {/* Header with Pin Button */}
          <div className={`flex items-center p-4 ${showExpanded ? "justify-end" : "justify-center"}`}>
            <Tooltip content={isPinned ? "Unpin sidebar" : "Pin sidebar"}>
              <Button
                onPress={() => setIsPinned(!isPinned)}
                isIconOnly
                variant="light"
                size="sm"
                aria-label="Pin sidebar"
                className={`transition-transform duration-300 ${isPinned ? "" : "rotate-45"}`}
              >
                <FontAwesomeIcon icon={faThumbtack} className="text-white" />
              </Button>
            </Tooltip>
          </div>
          
          <ScrollShadow hideScrollBar size={0} className="h-[calc(100vh-200px)]">
            {showExpanded ? <ExpandedMenu /> : (
              <div className="flex flex-col mt-6 space-y-8 text-white items-center">
                <Tooltip content="Catalog" placement="right"><FontAwesomeIcon icon={faBook} className="w-5 h-5" /></Tooltip>
                <Tooltip content="Services" placement="right"><FontAwesomeIcon icon={faHeadset} className="w-5 h-5" /></Tooltip>
                <Tooltip content="Infographics" placement="right"><FontAwesomeIcon icon={faCircleInfo} className="w-5 h-5" /></Tooltip>
                <NextLink href="/user/history"><Tooltip content="History" placement="right"><FontAwesomeIcon icon={faClockRotateLeft} className="w-5 h-5" /></Tooltip></NextLink>
              </div>
            )}
          </ScrollShadow>
        </div>
        
        <div className="p-4 border-t border-white/20">
          {showExpanded ? (
            <div className="space-y-2">
              <ModalFeedback isCollapsed={!showExpanded} />
              <ModalLogout openstat={showExpanded} />
            </div>
          ) : (
            <div className="flex flex-col items-center space-y-6">
              <ModalFeedback isCollapsed={!showExpanded} />
              <ModalLogout openstat={showExpanded} />
            </div>
          )}
        </div>
      </div>

      {/* ======================= MOBILE BOTTOM SHEET ======================= */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50">
        {mobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={() => setMobileMenuOpen(false)}
          ></div>
        )}
        <div
          className={`bg-dark-red rounded-t-2xl shadow-2xl transition-transform duration-300 ease-in-out flex flex-col ${mobileMenuOpen ? 'translate-y-0 max-h-[80vh]' : 'translate-y-[calc(100%-4rem)]'}`}
        >
          {/* Grabber Handle */}
          <div
            role="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-full h-16 flex-shrink-0 flex flex-col items-center justify-center cursor-pointer"
          >
            <div className="w-10 h-1.5 bg-white/50 rounded-full"></div>
            <p className="text-white text-sm font-semibold mt-2">Menu</p>
          </div>

          {/* Scrollable Menu Content */}
          <div className="flex-grow overflow-y-auto p-2">
              <ExpandedMenu onLinkClick={() => setMobileMenuOpen(false)} />
          </div>

          {/* Sticky Footer */}
          <div className="p-4 border-t border-white/20 flex-shrink-0">
              <div className="space-y-2">
                  <ModalFeedback isCollapsed={false} />
                  <ModalLogout openstat={true} />
              </div>
          </div>
        </div>
      </div>
    </>
  );
}
