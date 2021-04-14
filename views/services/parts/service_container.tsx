import { useEffect, useRef, useState } from "react";
import Button from "../../../components/button";
import { IServiceProps } from "../../../constants";
import styles from "../index.module.scss";
import SquareBlock from "./square_block";
import RowBlock from "./row_block";
import classNames from "classnames";
interface IProps {
  service: IServiceProps;
  reverse?: boolean;
  index: number;
  width: number;
  openModal: () => void;
}

const ServiceContainer = ({
  service,
  reverse,
  index,
  width,
  openModal,
}: IProps) => {
  const {
    logo,
    title,
    description,
    additionalData,
    additionalData2,
    bottomSection,
  } = service;
  const [full, setFull] = useState(false);
  const [position, setPosition] = useState(0);
  const [showOverflow, setShowOverflow] = useState(true);
  const ref = useRef(null);
  const hideShadow = () => {
    setTimeout(() => setShowOverflow(!showOverflow), 100);
  };

  const buildBottomSection = () => {
    return additionalData && bottomSection ? (
      <div style={{ position: "relative" }}>
        <div
          className={
            index == 3
              ? classNames(
                  styles.bottomSectionWrapperContainer,
                  full && styles.bottomSectionWrapperContainerFull
                )
              : styles.bottomSectionWrapperScroll
          }
        >
          {additionalData.map((item, index) => (
            <SquareBlock
              data={item}
              width={width}
              small
              marginBottom={index == 0 ? 45 : 15}
              key={index}
              squareWidth={width > 680 ? "23%" : "18%"}
            />
          ))}
        </div>
        {index == 3 && renderShowMoreSection()}
      </div>
    ) : null;
  };

  const renderHelperBlock = () => {
    return index == 2 ? (
      <span className={styles.additionalText}>
        *HPD Administering Agent services provided by Rentability, a nonprofit
        entity founded by one of City5's principals.
      </span>
    ) : null;
  };

  const renderShowMoreSection = () => {
    return (
      <div
        style={{
          display: width > 680 || index == 1 || index == 4 ? "flex" : "none",
        }}
        className={classNames(styles.shadow, full && styles.shadowFull)}
      >
        <img
          onClick={() => {
            setFull(!full);
            hideShadow();
          }}
          src="images/arrowDown.png"
        />
      </div>
    );
  };

  const renderSquareScrollButton = ({ left }: { left: boolean }) => (
    <div
      className={classNames(
        !left ? styles.shadowSquare : styles.shadowSquareLeft
      )}
      style={{ justifyContent: !left ? "flex-end" : "flex-start" }}
    >
      <img
        onClick={() => {
          if (left) {
            ref.current.scrollLeft = ref.current.scrollLeft + 347;
            setPosition(position + 1);
          } else {
            ref.current.scrollLeft = ref.current.scrollLeft - 347;
            setPosition(position - 1);
          }
        }}
        src="images/arrowDown.png"
      />
    </div>
  );

  const buildRows = () => {
    return (
      additionalData &&
      (index === 1 || index === 4) && (
        <div style={{ position: "relative" }}>
          <div
            className={classNames(
              styles.additionalDataWrapper,
              full ? styles.additionalDataWrapperFull : ""
            )}
            style={{
              // overflow: showOverflow ? "hidden" : "visible",
              margin: width > 680 ? "20px  0 3.125rem" : "40px 0",
            }}
          >
            {additionalData.map((item, index) => (
              <RowBlock data={item} key={index} />
            ))}
          </div>
          {renderShowMoreSection()}
        </div>
      )
    );
  };

  const buildHorizontalSquares = () => {
    return (
      additionalData &&
      index === 4 && (
        <div style={{ position: "relative" }}>
          <div className={styles.horizontalSquaresWrapper} ref={ref}>
            {additionalData2.map((item, index) => {
              return (
                <div className={styles.horizontalSquares}>
                  {item.map((data, index) => (
                    <SquareBlock
                      width={width}
                      key={index}
                      horizontal
                      data={data}
                      squareWidth={347}
                    />
                  ))}
                </div>
              );
            })}
          </div>
          {/* {position !== 3 && renderSquareScrollButton({ left: false })}
          {position !== 0 && renderSquareScrollButton({ left: true })} */}
        </div>
      )
    );
  };

  const buildSquares = () => {
    return (
      additionalData &&
      index === 2 && (
        <div style={{ position: "relative" }}>
          <div
            className={classNames(
              styles.squaresSectionWrapper,
              full ? styles.squaresSectionWrapperFull : ""
            )}
          >
            {additionalData.map((item, index) => (
              <SquareBlock
                width={width}
                key={index}
                data={item}
                squareWidth={width > 680 ? "48%" : "20%"}
              />
            ))}
          </div>
          {renderShowMoreSection()}
        </div>
      )
    );
  };

  if (index == 4) {
    return (
      <div className={styles.serviceWrapper}>
        <div className={styles.centerTitleWrapper}>
          <span className={styles.title}>{title}</span>
          <span
            className={styles.description}
            style={
              width > 680
                ? {
                    margin: "3.125rem 0 4.375rem",
                    textAlign: "center",
                  }
                : null
            }
          >
            {description}
          </span>
        </div>
        <div className={styles.mainSection} style={{ paddingRight: "10%" }}>
          <div className={styles.logoWrapper}>
            <img className={styles.logo} src={logo}></img>
          </div>
          <div className={styles.descriptionWrapper} style={{ width: "50%" }}>
            {width > 1024 ? buildHorizontalSquares() : buildRows()}

            <div
              style={{
                marginTop: full ? 50 : 0,
                transition: "margin-top 0.5s ease-in",
              }}
            >
              <Button
                style={styles.button}
                text="REQUEST A SERVICE"
                action={openModal}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={styles.serviceWrapper}
      style={{
        paddingLeft:
          width > 680
            ? index == 0 || index == 1 || index == 3
              ? "10%"
              : index == 4
              ? 0
              : "2%"
            : "10%",
        paddingRight: "10%",
      }}
    >
      <div
        className={styles.mainSection}
        style={{
          flexDirection:
            width > 680 ? (reverse ? "row-reverse" : "row") : "column",
        }}
      >
        <div className={styles.logoWrapper}>
          <img className={styles.logo} src={logo}></img>
        </div>
        <div className={styles.descriptionWrapper}>
          <span className={styles.title}>{title}</span>
          <span
            className={styles.description}
            style={
              width > 680
                ? {
                    margin:
                      index == 2 || index == 1
                        ? "3.125rem 0 1rem"
                        : "3.125rem 0 4.375rem",
                  }
                : null
            }
          >
            {description}
          </span>
          {renderHelperBlock()}
          {buildSquares()}
          {buildHorizontalSquares()}
          {buildRows()}
          <div
            style={{
              marginTop: full ? 50 : 0,
              transition: "margin-top 0.5s ease-in",
            }}
          >
            <Button
              style={styles.button}
              text="REQUEST A SERVICE"
              action={openModal}
            />
          </div>
        </div>
      </div>
      {buildBottomSection()}
    </div>
  );
};

// const ServiceContainer = ({ service, reverse, index, width }: IProps) => {
//   const { logo, title, description, additionalData, bottomSection } = service;

//   const [full, setFull] = useState(false);

//   const renderBottomSection = () => {
//     {
//       return additionalData && bottomSection ? (
//         <div className={styles.bottomSectionWrapper}>
// {additionalData.map((item, index) => (
//   <SquareBlock data={item} width={width} small key={index} />
// ))}
//         </div>
//       ) : null;
//     }
//   };

//   const renderAdditionalRowData = () => {
//     return additionalData && (index === 1 || index === 4) ? (
//       <div
// className={styles.additionalDataWrapper}
// style={{
//   margin: width > 680 ? "20px  0 3.125rem" : "40px 0",
// }}
//       >
//         {additionalData.map((item, index) => (
//           <RowBlock data={item} key={index} />
//         ))}
// <div className={styles.shadow}>
//   <img
//     onClick={() => {
//       console.log("SET FULL");
//       setFull(!full);
//     }}
//     src="images/arrowDown.png"
//   ></img>
// </div>
//       </div>
//     ) : null;
//   };

//   const renderAdditionalSquareData = () => {
//     return additionalData && index == 2 ? (
//       <div className={styles.rowsWrapper}>
//         {additionalData.map((item, index) => {
//           return width > 1380 ? (
//             <SquareBlock
//               width={width}
//               key={index}
//               data={item}
//               squareWidth={261}
//             />
//           ) : (
//             <RowBlock key={index} data={item} />
//           );
//         })}
//         <div className={styles.shadow}>
//           <img
//             onClick={() => {
//               console.log("SET FULL");
//               setFull(!full);
//             }}
//             src="images/arrowDown.png"
//           ></img>
//         </div>
//       </div>
//     ) : null;
//   };

// const renderHelperBlock = () => {
//   return index == 2 ? (
//     <span className={styles.additionalText}>
//       *HPD Administering Agent services provided by Rentability, a nonprofit
//       entity founded by one of City5's principals.
//     </span>
//   ) : null;
// };

//   if (index == 4) {
//     return (
//       <div className={styles.serviceWrapper} style={{ paddingRight: "8%" }}>
//         <div className={styles.centerTitleWrapper}>
//           <span className={styles.title}>{title}</span>
//           <span
//             style={{ textAlign: "center", margin: "3rem 0 4rem" }}
//             className={styles.description}
//           >
//             {description}
//           </span>
//         </div>

//         <div
//           className={styles.mainSection}
//           style={{ flexDirection: width > 680 ? "row" : "column" }}
//         >
//           <div className={styles.logoWrapper}>
//             <img className={styles.logo} src={logo}></img>
//           </div>
//           <div className={styles.descriptionWrapper} style={{ width: "50%" }}>
//             <div className={styles.centerServiceDataWrapper} style={{}}>
//               <div style={{ display: "flex", flexWrap: "nowrap" }}>
//                 {additionalData.map((item, index) => (
//                   <SquareBlock
//                     data={item}
//                     key={index}
//                     width={width}
//                     squareWidth={346}
//                   />
//                 ))}
//               </div>
//               <div style={{ display: "flex", flexWrap: "nowrap" }}>
//                 {additionalData.map((item, index) => (
//                   <SquareBlock
//                     data={item}
//                     key={index}
//                     width={width}
//                     squareWidth={346}
//                   />
//                 ))}
//               </div>
//               <div style={{ display: "flex", flexWrap: "nowrap" }}>
//                 {additionalData.map((item, index) => (
//                   <SquareBlock
//                     data={item}
//                     key={index}
//                     width={width}
//                     squareWidth={346}
//                   />
//                 ))}
//               </div>
//             </div>
//             <Button
//               style={styles.button}
//               text="REQUEST A SERVICE"
//               action={() => console.log("REQUEST")}
//             />
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div
//       className={styles.serviceWrapper}
//       style={{
//         paddingLeft: index == 0 || index == 1 || index == 3 ? "10%" : "2%",
//         paddingRight: "8%",
//       }}
//     >
//       <div
//         className={styles.mainSection}
//         style={{
//           flexDirection:
//             width > 680 ? (reverse ? "row-reverse" : "row") : "column",
//         }}
//       >
//         <div className={styles.logoWrapper}>
//           <img className={styles.logo} src={logo}></img>
//         </div>

//         <div className={styles.descriptionWrapper}>
//           <span className={styles.title}>{title}</span>
//           <span
//             className={styles.description}
//             style={
//               width > 680
//                 ? {
//                     margin:
//                       index == 2 || index == 1
//                         ? "3.125rem 0 1rem"
//                         : "3.125rem 0 4.375rem",
//                   }
//                 : null
//             }
//           >
//             {description}
//           </span>
//           {renderHelperBlock()}
//           {renderAdditionalRowData()}
//           {renderAdditionalSquareData()}
//           {width < 680 ? renderBottomSection() : null}
//           <Button
//             style={styles.button}
//             text="REQUEST A SERVICE"
//             action={() => console.log("REQUEST")}
//           />
//         </div>
//       </div>
//       {width > 680 ? renderBottomSection() : null}
//     </div>
//   );
// };

export default ServiceContainer;
