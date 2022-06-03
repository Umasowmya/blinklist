import { Grid } from "@mui/material";
import React from "react";
import { customStyles } from '../../../theme/index';
import Typo from "../../atoms/Typo";
import BlinkList from '../../../assets/blinklist.png'


const index = () => {
  const classes = customStyles();
  return (
      <Grid container className={classes.fullFooter} role="Footer">
          <Grid
              item
              container
              direction="column"
              rowGap={6}
              sx={{ alignItems: "flex-start", width: "952px" }}
          >
              <Grid
                  item
                  container
                  sx={{ width: "952px", height: "224px" }}
                  columnGap={4}
              >
                  <Grid item>
                      <Grid
                          container
                          direction="column"
                          rowGap={"32px"}
                          sx={{
                              width: "378px",
                              height: "120px",
                          }}
                          role="footer-left"
                      >
                          <Grid item sx={{ height: "24px", width: "100px" }}>
                              <img src={BlinkList} alt="blinklist"/>
                          </Grid>

                          <Grid item>
                              <Typo
                                  variant="subtitle1"
                                  component="div"
                                  text="Big ideas in small packages
                                            Start learning now"
                                  className={classes.footerLeft}
                              />
                          </Grid>
                      </Grid>
                  </Grid>

                  <Grid item>
                      <Grid
                          container
                          direction="row"
                          columnGap={4}
                          wrap="nowrap"
                          className={classes.footer}
                          data-testid="footer-right"
                      >
                          {/* // Editorial */}
                          <Grid
                              item
                              container
                              direction="column"
                              rowGap={2}
                              sx={{ width: "214px", height: "224px" }}
                          >
                              <Grid item>
                                  <Typo
                                      variant="body1"
                                      component="div"
                                      text="Editorial"
                                      className={classes.bookInfo}
                                  />
                              </Grid>

                              <Grid item>
                                  <Typo
                                      variant="body2"
                                      component="div"
                                      text="Book lists"
                                      className={classes.iconText}
                                  />
                              </Grid>

                              <Grid item>
                                  <Typo
                                      variant="body2"
                                      component="div"
                                      text="What is Nonfiction?"
                                      className={classes.iconText}
                                  />
                              </Grid>

                              <Grid item>
                                  <Typo
                                      variant="body2"
                                      component="div"
                                      text="What to read next?"
                                      className={classes.iconText}
                                  />
                              </Grid>

                              <Grid item>
                                  <Typo
                                      variant="body2"
                                      component="div"
                                      text="Benefits of reading"
                                      className={classes.iconText}
                                  />
                              </Grid>

                              <Grid item></Grid>
                          </Grid>

                          {/* // Useful Links */}
                          <Grid
                              item
                              container
                              direction="column"
                              rowGap={2}
                              sx={{ width: "132px", height: "224px" }}
                          >
                              <Grid item>
                                  <Typo
                                      variant="body1"
                                      component="div"
                                      text="Useful links"
                                      className={classes.bookInfo}
                                  />
                              </Grid>

                              <Grid item>
                                  <Typo
                                      variant="body2"
                                      component="div"
                                      text="Pricing"
                                      className={classes.iconText}
                                  />
                              </Grid>

                              <Grid item>
                                  <Typo
                                      variant="body2"
                                      component="div"
                                      text="Blinkist business"
                                      className={classes.iconText}
                                  />
                              </Grid>

                              <Grid item>
                                  <Typo
                                      variant="body2"
                                      component="div"
                                      text="Gift cards"
                                      className={classes.iconText}
                                  />
                              </Grid>

                              <Grid item>
                                  <Typo
                                      variant="body2"
                                      component="div"
                                      text="Blinkist magaine"
                                      className={classes.iconText}
                                  />
                              </Grid>

                              <Grid item>
                                  <Typo
                                      variant="body2"
                                      component="div"
                                      text="Contact & help"
                                      className={classes.iconText}
                                  />
                              </Grid>
                          </Grid>

                          {/* // Company */}
                          <Grid
                              item
                              container
                              direction="column"
                              rowGap={2}
                              sx={{ width: "132px", height: "224px" }}
                          >
                              <Grid item>
                                  <Typo
                                      variant="body1"
                                      component="div"
                                      text="Company"
                                      className={classes.bookInfo}
                                  />
                              </Grid>

                              <Grid item>
                                  <Typo
                                      variant="body2"
                                      component="div"
                                      text="About"
                                      className={classes.iconText}
                                  />
                              </Grid>

                              <Grid item>
                                  <Typo
                                      variant="body2"
                                      component="div"
                                      text="Careers"
                                      className={classes.iconText}
                                  />
                              </Grid>

                              <Grid item>
                                  <Typo
                                      variant="body2"
                                      component="div"
                                      text="partners"
                                      className={classes.iconText}
                                  />
                              </Grid>

                              <Grid item>
                                  <Typo
                                      variant="body2"
                                      component="div"
                                      text="Code of Conduct"
                                      className={classes.iconText}
                                  />
                              </Grid>

                              <Grid item></Grid>
                          </Grid>
                      </Grid>
                  </Grid>
              </Grid>

              <Grid item>
                  <Typo
                      variant="caption"
                      component="div"
                      text="© Blinkist 2021 Sitemap   |   Imprint   |   Terms of Service   |   Privacy Policies"
                      className={classes.iconText}
                  />
              </Grid>
          </Grid>
      </Grid>
  );
};

export default index;