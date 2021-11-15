import axios from "axios";

export default axios.create({
  baseURL: "https://us-east-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/portfolio-rbxin/service/portfolio/incoming_webhook/webhook0",
  headers: {
    "Content-type": "application/json"
  }
});

