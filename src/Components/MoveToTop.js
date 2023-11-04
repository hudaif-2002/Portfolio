import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { MdArrowUpward } from "react-icons/md";

const MoveToTop = () => {
    const path = useLocation();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [path]);

    const handleScroll = () => {
        if (window.scrollY > 100) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const styles = `
        .move-to-top {
            position: fixed;
            bottom: 20px;
            right: 20px;
            background-color: #0066cc;
            color: white;
            padding: 10px;
            border-radius: 50%;
            cursor: pointer;
            opacity: ${isVisible ? 1 : 0};
            transition: opacity 0.3s ease;
        }
    `;

    return (
        <>
            <style>{styles}</style>
            <div className={`move-to-top ${isVisible ? "visible" : ""}`} onClick={scrollToTop}>
                <MdArrowUpward />
            </div>
        </>
    );
}

export default MoveToTop;
