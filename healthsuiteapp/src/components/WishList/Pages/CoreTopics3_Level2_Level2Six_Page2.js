import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableContainer,
  Paper,
  IconButton,
} from "@mui/material";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import {
  addToWishlist,
  removeFromWishlist,
  getWishlist,
} from "../../../utils/localStorageHelpers";

const CoreTopics3_Level2_Level2Six_Page2 = () => {
  const pageId = "CoreTopics3_Level2_Level2Six_Page2"; // Unique identifier for this page
  const [isBookmarked, setIsBookmarked] = useState(false);

  // Check if the page is in the wishlist on component mount and update state
  useEffect(() => {
    const wishlist = getWishlist();
    setIsBookmarked(wishlist.includes(pageId));
  }, []);

  const handleBookmark = () => {
    if (isBookmarked) {
      removeFromWishlist(pageId);
      setIsBookmarked(false);
    } else {
      addToWishlist(pageId);
      setIsBookmarked(true);
    }
  };

  return (
    <Box
      sx={{
        p: 3,
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        justifyContent: "space-between",
        backgroundColor: "#f3f3f3", // Adjust the background color as needed
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{ mb: 1, textAlign: "center", color: "#007FFF" }}
        >
          Level 2.6: Appear More Confused Than Usual
        </Typography>
        <IconButton onClick={handleBookmark} aria-label="add to wishlist">
          {isBookmarked ? <BookmarkIcon /> : <BookmarkBorderIcon />}
        </IconButton>
      </Box>
      <Typography variant="h6" sx={{ mb: 2, fontSize: "1rem" }}>
        Page 2 of 2
      </Typography>
      <TableContainer component={Paper} sx={{ boxShadow: 1 }}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell
                sx={{
                  width: "50%",
                  verticalAlign: "top",
                  borderRight: "2px solid black",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ fontSize: "1rem", fontWeight: "bold", color: "black" }}
                >
                  Try
                </Typography>
                <ul>
                  <li>Staying calm and patient.</li>
                  <li>Providing reassurance.</li>
                  <li>Communicating with simple and brief explanations.</li>
                  <li>Using cue cards.</li>
                  <li>
                    Showing photos and personal items to reorient the person.
                  </li>
                  <li>Being present in the person's current time/reality.</li>
                  <li>Encouraging fluids throughout the day.</li>
                </ul>
              </TableCell>
              <TableCell sx={{ width: "50%", verticalAlign: "top" }}>
                <Typography
                  variant="h6"
                  sx={{ fontSize: "1rem", fontWeight: "bold", color: "black" }}
                >
                  Avoid
                </Typography>
                <ul>
                  <li>Taking their behavior personally.</li>
                  <li>
                    Making your hurt apparent if the person can't recall who you
                    are.
                  </li>
                  <li>Overwhelming the person with explanations.</li>
                </ul>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Typography
        sx={{ mt: 2, mb: 2, fontSize: "0.875rem", textAlign: "center" }}
      ></Typography>
    </Box>
  );
};

export default CoreTopics3_Level2_Level2Six_Page2;