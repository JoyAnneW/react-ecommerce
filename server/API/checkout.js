//  we initialized stripe api in the stripe file and are importing it here
const stripeAPI = require("../stripe");

const createCheckoutSession = async (req, res) => {
	// need a domain url because cs will be redirected to stripe hosted checkout page. the domain url is needed for stripe to get back to your site
	// this will be the url the application is deployed to. for now it's the reactapp url
	const domainUrl = process.env.WEB_APP_URL;
	console.log(req.body);
	// these are what we are sending to the stripeAPI
	const { line_items, customer_email } = req.body;

	// make sure reqbody contains lineitems and email orelse we can't create the checkoutsession with stripe
	if (!line_items || !customer_email) {
		return res
			.status(400)
			.json({ error: "missing required session parameters" });
	}

	// creating session
	let session;
	try {
		// call to stripe api to create session
		session = await stripeAPI.checkout.sessions.create({
			payment_method_types: ["card"],
			mode: "payment",
			// these are destructured from reqbody and using es6 computed property name syntax
			line_items,
			customer_email,
			// need these routes in front end. customer will be redirected to /success on successful payment. query params used from ?
			success_url: `${domainUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
			cancel_url: `${domainUrl}/cancel`,
			shipping_address_collection: { allowed_countries: ["NL", "US"] },
		});

		// only the sessionID is needed on frontend to redirect buyer to success page. don't send back the entire session object for security reasons.
		res.status(200).json({ sessionID: session.id });
	} catch (error) {
		console.log(error);
		res
			.status(400)
			.json({ error: "An error occured. Unable to create session." });
	}
};

module.exports = createCheckoutSession;
