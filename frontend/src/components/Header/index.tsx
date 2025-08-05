"use client";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { useEffect, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useRouter } from "next/navigation";

const pages = ["Buy", "Sell", "Finance"];
const settings = ["Profile", "Account", "Settings", "Logout"];

const darkTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#ffffff",
    },
    text: {
      primary: "#ffffff",
      secondary: "#1976d2",
    },
  },
});

function Header() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(
    null
  );
  const [token, setToken] = useState<string | null>(null);

  const router = useRouter();

  useEffect(() => {
    const storedToken = sessionStorage.getItem("token");
    setToken(storedToken);
  }, []);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleClickSignUp = () => {
    router.push("/register");
  };

  const handleClickLogIn = () => {
    router.push("/login");
  };

  const goToMainPage = () => {
    router.push("/");
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar
        sx={{
          zIndex: "2",
          position: "absolute",
          boxShadow: "none",
          bgcolor: "rgba(26, 26, 26, 0.521)",
        }}
        color="transparent"
        position="static"
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box
              onClick={goToMainPage}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                cursor: "pointer",
              }}
            >
              <Box
                component="img"
                src="/icons/logo.png"
                alt="Car Icon"
                sx={{
                  width: 60,
                  height: "auto",
                }}
              />
              <Typography
                variant="h6"
                noWrap
                component="a"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontWeight: 700,
                  textDecoration: "none",
                  color: "white",
                }}
              >
                AutoTrade
              </Typography>
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: "block", md: "none" } }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography
                      color="text.primary"
                      sx={{ textAlign: "center" }}
                    >
                      {page}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                textDecoration: "none",
              }}
            >
              AutoTrade
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    display: "block",
                    color: (theme) => theme.palette.text.primary,
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>
            {token ? (
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      sx={{
                        bgcolor: "white",
                        color: "#393939",
                      }}
                      alt="Remy Sharp"
                      src=""
                    />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  PaperProps={{
                    sx: {
                      bgcolor: "#1a1a1a",
                      color: "white",
                    },
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography sx={{ textAlign: "center" }}>
                        {setting}
                      </Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            ) : (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <Button
                  color="primary"
                  sx={{
                    bgcolor: (theme) => theme.palette.text.secondary,
                  }}
                  onClick={handleClickSignUp}
                >
                  Sign Up
                </Button>
                <Button onClick={handleClickLogIn} variant="contained">
                  Log In
                </Button>
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}
export default Header;
