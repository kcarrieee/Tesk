import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import cn from "classnames";
import useOnScreen from "../../../hooks/useOnScreen";
import './Gallery.scss';
import Text from "../../Shared/Text/Text";
import photo from './img/freelance.jpg';
import photo2 from './img/bussiness.jpg';
import photo3 from './img/team.png';
import photo4 from './img/gallery1.png';

const images = [
   {
        src: photo,
        title: 'Фрилансеры',
        subtitle: 'Чтобы не запутаться в проектах и не пропустить ни одной задачи, стоит воспользоваться Tesk'
    },
    {
        src: photo2,
        title: 'Индивидуальные предприниматели',
        subtitle: 'Чтобы не запутаться в проектах и не пропустить ни одной задачи, стоит воспользоваться Tesk'
    },
    {
        src: photo3,
        title: 'Команды',
        subtitle: 'Чтобы не запутаться в проектах и не пропустить ни одной задачи, стоит воспользоваться Tesk'
    },
    {
        src: photo4,
        title: 'Для повседневной жизни',
        subtitle: 'Чтобы не запутаться в проектах и не пропустить ни одной задачи, стоит воспользоваться Tesk'
    },
];

function GalleryItem({
  src,
  title,
  subtitle,
  updateActiveImage,
  index
}) {
  const ref = useRef(null);
  const onScreen = useOnScreen(ref, 0.5);
  useEffect(() => {
    if (onScreen) {
      updateActiveImage(index);
    }
  }, [onScreen, index,updateActiveImage]);

  return (
    <div
      className={cn("gallery_item_wrapper", { "is-reveal": onScreen })}
      ref={ref}
    >
     <div></div>
        <div className='gallery_item'>
            <div className='gallery_info'>
                <Text tag='h3'>{title}</Text>
                <Text tag='p'>{subtitle}</Text>
            </div>
            <div className='gallery_image'
            style={{backgroundImage:`url(${src})`}}></div>
        </div>
        <div></div>
    </div>
  );
}

export default function Gallery({ src }) {
  const [activeImage, setActiveImage] = useState(1);
  const ref = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let sections = gsap.utils.toArray(".gallery_item_wrapper");

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        start: "top top",
        trigger: ref.current,
        pin: true,
        invalidateOnRefresh: true,
        scrub: 1,
        end: "+=5000"
      }
    });

    ScrollTrigger.refresh();
  }, []);

  const handleUpdateActiveImage = (index) => {
    setActiveImage(index + 1);
  };

  return (
    <>
      <section ref={ref} className="gallery_wrapper">
        <div className="gallery">
          <div className="gallery_counter">
            <span>{activeImage}</span>
            <span className="divider" />
            <span>{images.length}</span>
          </div>

          {images.map((image, index) => (
            <GalleryItem
              key={src}
              index={index}
              {...image}
              updateActiveImage={handleUpdateActiveImage}
            />
          ))}
        </div>
      </section>
    </>
  );
}
