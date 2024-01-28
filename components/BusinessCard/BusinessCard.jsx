import React, { useRef } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import IconButton from "@mui/material/IconButton";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";
import WebIcon from "@mui/icons-material/Web";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import Stack from "@mui/material/Stack";
import html2canvas from "html2canvas";
import { toPng } from "dom-to-image";

const BusinessCard = () => {
  const cardRef = useRef(null);
  const scale = 2;

  // const handleDownload = async () => {
  //   setTimeout(() => {
  //     html2canvas(cardRef.current, {
  //       scale,
  //       dpi: 300 * scale,
  //     }).then((canvas) => {
  //       const dataUrl = canvas.toDataURL();
  //       const link = document.createElement("a");

  //       link.download = "filename.png";
  //       link.href = dataUrl;
  //       link.click();
  //     });
  //   }, 1000);
  // };

  const handleDownload = async () => {
    const dataUrl = await toPng(cardRef.current);

    const link = document.createElement("a");
    link.download = "card.png";
    link.href = dataUrl;
    link.click();
  };
  return (
    <>
      <div ref={cardRef}>
        <Card
          sx={{
            width: "50%",
            margin: "auto",
            mt: 10,
            marginBottom: "12px",
            boxShadow: 13,
            bgcolor: "white",
            position: "relative",
          }}
          id="card-id"
        >
          <CardContent>
            <Box display="flex" alignItems="center">
              {/* Photo on the left */}
              <Avatar
                alt="User Photo"
                src="/img/panagiotis.jpg"
                sx={{ width: 200, height: 200 }}
              />
              {/* Vertical line */}
              <Divider
                orientation="vertical"
                sx={{ mx: 2, height: "80%", color: "red" }}
              />

              {/* Right part with details */}
              <Box flexGrow={1} pl={2} sx={{ textAlign: "left" }}>
                <Typography
                  className="c cc"
                  style={{ width: "500px" }}
                  variant="h4"
                >
                  Panagiotis Glazko
                </Typography>
                <Typography style={{ width: "100px" }} variant="subtitle1">
                  Rieltor
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Respector Group
                </Typography>
                <Stack direction="row" sx={{ verticalAlign: "center" }}>
                  <Typography
                    variant="body1"
                    color="textSecondary"
                    sx={{ verticalAlign: "center" }}
                  >
                    <MailIcon />{" "}
                    <Link href="mailto:john.doe@example.com">
                      john.doe@example.com
                    </Link>
                  </Typography>
                </Stack>
                <Typography variant="body2" color="textSecondary">
                  <PhoneIcon /> +1 (555) 123-4567
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  <WebIcon />{" "}
                  <Link href="https://www.example.com">www.example.com</Link>
                </Typography>

                {/* Social links */}
                <Box mt={2}>
                  <IconButton>
                    <FacebookIcon />
                  </IconButton>
                  <IconButton>
                    <TwitterIcon />
                  </IconButton>
                </Box>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </div>
      <button
        className="butn bord wow fadeInUp"
        data-wow-delay=".5s"
        onClick={handleDownload}
      >
        {" "}
        <span>Download</span>
      </button>
    </>
  );
};

export default BusinessCard;

// import React, { useRef, useState, useEffect } from "react";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import Typography from "@mui/material/Typography";
// import Divider from "@mui/material/Divider";
// import Avatar from "@mui/material/Avatar";
// import Box from "@mui/material/Box";
// import Link from "@mui/material/Link";
// import IconButton from "@mui/material/IconButton";
// import MailIcon from "@mui/icons-material/Mail";
// import PhoneIcon from "@mui/icons-material/Phone";
// import WebIcon from "@mui/icons-material/Web";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import Stack from "@mui/material/Stack";
// import html2canvas from "html2canvas";
// import download from "downloadjs";
// import { useToSvg } from "@hugocxl/react-to-image";
// import { useToImage } from "@hcorta/react-to-image";

// const BusinessCard = () => {
//   const { ref, isLoading, getPng } = useToImage();

//   useEffect(() => {
//     if (ref.current) {
//       getPng();
//     }
//   }, [ref]);

//   return (
//     <div ref={ref}>
//       <div>
//         <Card
//           sx={{
//             width: "60%",
//             margin: "auto",
//             mt: 10,
//             marginBottom: "12px",
//             boxShadow: 13,
//             bgcolor: "white",
//             position: "relative",
//           }}
//         >
//           <CardContent>
//             <Box display="flex" alignItems="center">
//               {/* Photo on the left */}
//               <Avatar
//                 alt="User Photo"
//                 src="/img/panagiotis.jpg"
//                 sx={{ width: 200, height: 200 }}
//               />
//               {/* Vertical line */}
//               <Divider
//                 orientation="vertical"
//                 sx={{ mx: 2, height: "80%", color: "red" }}
//               />
//               <Box flexGrow={1} pl={2} sx={{ textAlign: "left" }}>
//                 <Typography
//                   className="c cc"
//                   style={{ width: "500px" }}
//                   variant="h4"
//                 >
//                   Panagiotis Glazko
//                 </Typography>
//                 <Typography style={{ width: "100px" }} variant="subtitle1">
//                   Rieltor
//                 </Typography>
//                 <Typography variant="body2" color="textSecondary">
//                   Respector Group
//                 </Typography>
//                 <Stack direction="row" sx={{ verticalAlign: "center" }}>
//                   <Typography
//                     variant="body1"
//                     color="textSecondary"
//                     sx={{ verticalAlign: "center" }}
//                   >
//                     <MailIcon />{" "}
//                     <Link href="mailto:john.doe@example.com">
//                       john.doe@example.com
//                     </Link>
//                   </Typography>
//                 </Stack>
//                 <Typography variant="body2" color="textSecondary">
//                   <PhoneIcon /> +1 (555) 123-4567
//                 </Typography>
//                 <Typography variant="body2" color="textSecondary">
//                   <WebIcon />{" "}
//                   <Link href="https://www.example.com">www.example.com</Link>
//                 </Typography>

//                 {/* Social links */}
//                 <Box mt={2}>
//                   <IconButton>
//                     <FacebookIcon />
//                   </IconButton>
//                   <IconButton>
//                     <TwitterIcon />
//                   </IconButton>
//                 </Box>
//               </Box>
//             </Box>
//           </CardContent>
//         </Card>
//       </div>
//       <button
//         className="butn bord wow fadeInUp"
//         data-wow-delay=".2s"
//         onClick={getPng}
//       >
//         {" "}
//         <span> {isLoading ? "loading..." : "Download"}</span>
//       </button>
//     </div>
//   );
// };

// export default BusinessCard;
