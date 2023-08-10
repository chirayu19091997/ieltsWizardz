// const requestData = {
//     testimonialData: testimonialData,
//   };
//   const makeCall = async () => {
//     await axios
//       .post(
//         `${process.env.NEXT_PUBLIC_KV_REST_API_URL}/set/testimonials`,
//         requestData,
//         {
//           headers: {
//             Authorization: `Bearer ${process.env.NEXT_PUBLIC_KV_REST_API_TOKEN}`,
//           },
//         }
//       )
//       .then((response) => console.log(response.data))
//       .catch((error) => console.error(error));
//   };

//   const getmakeCall = async () => {
//     await axios
//       .get(
//         `${process.env.NEXT_PUBLIC_KV_REST_API_URL}/get/testimonials`,

//         {
//           headers: {
//             Authorization: `Bearer ${process.env.NEXT_PUBLIC_KV_REST_API_TOKEN}`,
//           },
//         }
//       )
//       .then((response) => console.log(JSON.parse(response.data.result)))
//       .catch((error) => console.error(error));
//   };

// useEffect(() => {
//   // makeCall();
//   getmakeCall();
// }, []);
