import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { authService } from "../services/auth.service";
import { storage } from "../../../utils/storage";
import { replace, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loadiing, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await authService.login({ email, password });
      storage.saveAuth(response);
      navigate("/dashboard", {replace:true})
      console.log(response);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Box sx={{ height: "100vh" }}>
      <Grid container sx={{ height: "100%" }}>
        {/* Left Section */}
        <Grid
          size={{ xs: 12, md: 6 }}
          sx={{ display: { xs: "none", md: "block" } }}
        >
          <Box
            sx={{
              height: "100%",
              width: "100%",
              bgcolor: "grey.200",
            }}
          >
            {/* Branding Image */}
          </Box>
        </Grid>

        {/* Right Section */}
        <Grid size={{ xs: 12, md: 6 }} sx={{ height: "100%" }}>
          <Box
            sx={{
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              px: { xs: 2, sm: 4 },
              py: 6,
              overflowY: "auto",
            }}
          >
            <Paper
              elevation={3}
              sx={{
                p: { xs: 3, sm: 6 },
                borderRadius: 3,
                // width: "100%",
                // maxWidth: 440,
              }}
            >
              <form onSubmit={handleSubmit}>
                <Stack spacing={3}>
                  {/* Logo */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Typography variant="h5" sx={{ fontWeight: 700 }}>
                      EstateFlow
                    </Typography>

                    <Typography
                      variant="body2"
                      color="primary"
                      sx={{ fontWeight: 600 }}
                    >
                      Super Admin Portal
                    </Typography>
                  </Box>

                  {/* Heading */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "column",
                      textAlign: "center",
                    }}
                  >
                    <Typography variant="h4" sx={{ fontWeight: 700 }}>
                      Welcome Back
                    </Typography>

                    <Typography
                      variant="body1"
                      color="text.secondary"
                      sx={{ mt: 1 }}
                    >
                      Sign in to continue to your dashboard.
                    </Typography>
                  </Box>

                  {/* Email */}
                  <TextField
                    fullWidth
                    label="Email Address"
                    placeholder="admin@estateflow.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  {/* Password */}
                  <TextField
                    fullWidth
                    label="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />

                  {/* Remember Me */}
                  <Stack
                    direction="row"
                    sx={{
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Remember me"
                    />

                    <Button variant="text">Forgot Password?</Button>
                  </Stack>

                  {/* Login Button */}
                  <Button
                    type="submit"
                    disabled={loadiing}
                    variant="contained"
                    size="large"
                    fullWidth
                  >
                    Login
                  </Button>

                  {/* Footer */}
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ textAlign: "center" }}
                  >
                    © 2026 EstateFlow. All rights reserved.
                  </Typography>
                </Stack>
              </form>
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LoginPage;
