// import React, { useRef, useEffect } from 'react';
// import gsap from 'gsap';


// function NavBar() {
//     const menuItems = useRef([]);

//     useEffect(() => {
//         menuItems.current.forEach(item => {
//             const firstText = item.querySelector('.firstText');
//             const secondText = item.querySelector('.secondText');

//             const firstTextLetters = firstText.innerText.split('').map(char => (
//                 `<span class="letter" style="display:inline-block;">${char}</span>`
//             )).join('');
//             const secondTextLetters = secondText.innerText.split('').map(char => (
//                 `<span class="letter" style="display:inline-block;">${char}</span>`
//             )).join('');

//             firstText.innerHTML = firstTextLetters;
//             secondText.innerHTML = secondTextLetters;

//             const firstTextSpans = firstText.querySelectorAll('.letter');
//             const secondTextSpans = secondText.querySelectorAll('.letter');

//             gsap.set(secondTextSpans, { rotateX: -90 });
//             gsap.set(firstTextSpans, { rotateX: 0 });

//             const enterAnimation = gsap.timeline({ paused: true });
//             firstTextSpans.forEach((span, i) => {
//                 enterAnimation.to(span, { duration: 0.2, rotateX: 90, ease: 'power2.inOut' }, i * 0.02);
//             });
//             secondTextSpans.forEach((span, i) => {
//                 enterAnimation.to(span, { duration: 0.2, rotateX: 0, ease: 'power2.inOut' }, i * 0.02 + 0.2);
//             });

//             const leaveAnimation = gsap.timeline({ paused: true });
//             firstTextSpans.forEach((span, i) => {
//                 leaveAnimation.to(span, { duration: 0.2, rotateX: 0, ease: 'power2.inOut' }, i * 0.05 + 0.2);
//             });
//             secondTextSpans.forEach((span, i) => {
//                 leaveAnimation.to(span, { duration: 0.2, rotateX: -90, ease: 'power2.inOut' }, i * 0.05);
//             });

//             item.addEventListener('mouseenter', () => {
//                 leaveAnimation.pause(0); // Reset leave animation
//                 enterAnimation.restart();
//             });

//             item.addEventListener('mouseleave', () => {
//                 enterAnimation.pause(0); // Reset enter animation
//                 leaveAnimation.restart();
//             });
//         });
//     }, []);

//     return (
//         <nav>
//             <ul>
//                 <li ref={el => menuItems.current[0] = el}>
//                     <p className='firstText'>Création site web</p>
//                     <p className='secondText'>Création site web</p>
//                 </li>
//                 <li ref={el => menuItems.current[1] = el}>
//                     <p className='firstText'>Réferencement & SEO</p>
//                     <p className='secondText'>Réferencement & SEO</p>
//                 </li>
//                 <li ref={el => menuItems.current[2] = el}>
//                     <p className='firstText'>Communication</p>
//                     <p className='secondText'>Communication</p>
//                 </li>
//                 <li ref={el => menuItems.current[3] = el}>
//                     <p className='firstText'>Contact</p>
//                     <p className='secondText'>Contact</p>
//                 </li>
//             </ul>
//         </nav>
//     );
// }

// export default NavBar;
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { Link } from 'react-router-dom';
function NavBar() {
    const menuItems = useRef([]);

    useEffect(() => {
        // Animation de chargement des éléments du menu
        gsap.fromTo(menuItems.current, 
            { x: 800, opacity: 0 }, // Position de départ décalée à droite
            { x: 0, opacity: 1, duration: 0.3, delay: 0.2, stagger: 0.1, ease: 'power1.in' } // Position finale normale
        );
        menuItems.current.forEach(item => {
            const firstText = item.querySelector('.firstText');
            const secondText = item.querySelector('.secondText');

            const firstTextLetters = firstText.innerText.split('').map(char => (
                char === ' ' ? `<span class="letter space" style="display:inline-block;">&nbsp;</span>` : `<span class="letter" style="display:inline-block;">${char}</span>`
            )).join('');
            const secondTextLetters = secondText.innerText.split('').map(char => (
                char === ' ' ? `<span class="letter space" style="display:inline-block;">&nbsp;</span>` : `<span class="letter" style="display:inline-block;">${char}</span>`
            )).join('');

            firstText.innerHTML = firstTextLetters;
            secondText.innerHTML = secondTextLetters;

            const firstTextSpans = firstText.querySelectorAll('.letter');
            const secondTextSpans = secondText.querySelectorAll('.letter');

            gsap.set(secondTextSpans, { rotateX: -90 });
            gsap.set(firstTextSpans, { rotateX: 0 });

            const enterAnimation = gsap.timeline({ paused: true });
            firstTextSpans.forEach((span, i) => {
                enterAnimation.to(span, { duration: 0.2, rotateX: 90, ease: 'power2.inOut' }, i * 0.02);
            });
            secondTextSpans.forEach((span, i) => {
                enterAnimation.to(span, { duration: 0.2, rotateX: 0, ease: 'power2.inOut' }, i * 0.02 + 0.2);
            });

            const leaveAnimation = gsap.timeline({ paused: true });
            firstTextSpans.forEach((span, i) => {
                leaveAnimation.to(span, { duration: 0.2, rotateX: 0, ease: 'power2.inOut' }, i * 0.05 + 0.2);
            });
            secondTextSpans.forEach((span, i) => {
                leaveAnimation.to(span, { duration: 0.2, rotateX: -90, ease: 'power2.inOut' }, i * 0.05);
            });

            item.addEventListener('mouseenter', () => {
                leaveAnimation.pause(0); // Reset leave animation
                enterAnimation.restart();
            });

            item.addEventListener('mouseleave', () => {
                enterAnimation.pause(0); // Reset enter animation
                leaveAnimation.restart();
            });
        });
    }, []);

    return (
        <nav>
            <Link to={'/'}>
            <img className='logo' src="#" alt="" />
            </Link>
            <ul>
                    <Link to={'/creation'}> 
                <li ref={el => menuItems.current[0] = el}>
                    <p className='firstText'>Création site web</p>
                    <p className='secondText'>Création site web</p>
                </li>
                    </Link>
                    <Link to={'/seo'}>
                <li ref={el => menuItems.current[1] = el}>
                    <p className='firstText'>Réferencement & SEO</p>
                    <p className='secondText'>Réferencement & SEO</p>
                </li>
                    </Link>
                    <Link to={'/communication'}>
                <li ref={el => menuItems.current[2] = el}>
                    <p className='firstText'>Communication</p>
                    <p className='secondText'>Communication</p>
                </li>
                    </Link>
                <Link to={"/contact"}>
                <li ref={el => menuItems.current[3] = el}>
                    <p className='firstText'>Contact</p>
                    <p className='secondText'>Contact</p>
                </li>
                </Link>
            </ul>
        </nav>
    );
}

export default NavBar;
