import React from "react";
import CallToAction from "../components/CallToAction";

const AdminSubscription = () => {
  const handleComposeEmail = () => {
    const recipientEmail = "blogger5iveblogs@gmail.com";
    const gmailComposeURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipientEmail}`;

    if (window.innerWidth < 768) {
      window.location.href = gmailComposeURL;
    } else {
      window.open(gmailComposeURL, "_blank", { bypassServiceWorker: true });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto p-3 text-center">
        <div>
          <h1 className="text-3xl font-semibold text-center my-7">
            <span className="text-orange-400">Admin Subscription</span>
          </h1>
          <div className="text-md text-gray-300 flex flex-col gap-6">
            <p>
              We appreciate your continued support and engagement within our
              community, as we strive to maintain a high standard of service and
              security. In the future, in order to write blogs on our platform,
              we will introduce a subscription model basically for
              administrative privileges. All users will be updated accordingly.
            </p>
            <p>
              Becoming an admin on our platform in order to write your amazing
              article, will require a paid subscription. Admins will have more
              control over their content in dynamic ways. This subscription fee
              will contribute to the ongoing improvement of our services,
              ensuring a smoother and more efficient experience for all users.
            </p>
            <p>Contact us to unlock admin privileges:</p>
          </div>
        </div>

        <button
          className="text-cyan-500 text-lg hover:underline p-7 w-full"
          onClick={handleComposeEmail}
        >
          blogger5iveblogs@gmail.com
        </button>
        <CallToAction />
      </div>
    </div>
  );
};

export default AdminSubscription;
