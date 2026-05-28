const app = express();

const PORT = process.env.PORT || 5000;

/*
  MIDDLEWARE
*/
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);

app.use(express.json());

/*
  ROUTES
*/
app.use("/api/test", testRoutes);

/*
  404 MIDDLEWARE
*/
app.use(notFound);

/*
  ERROR MIDDLEWARE
*/
app.use(errorHandler);

/*
  SERVER
*/
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});