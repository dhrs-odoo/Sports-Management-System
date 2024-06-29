import { MigrationInterface, QueryRunner } from 'typeorm'

export class Script1702311247028 implements MigrationInterface {
  name = 'Script1702311247028'

  public async up(queryRunner: QueryRunner): Promise<void> {
    try {
      await queryRunner.query(
        `
        INSERT INTO "user" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "status", "password") VALUES ('f4afb18e-e1d2-41ef-8777-75fdd0f5ca17', '1Lue_Schinner@yahoo.com', 'Michael Brown', 'https://i.imgur.com/YfJQV5z.png?id=3', 'cus_J5K9h1G2e3F6', 'inactive', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "status", "password") VALUES ('3552259c-183d-4957-8836-b5baa22c3f3d', '8Catherine81@hotmail.com', 'Michael Brown', 'https://i.imgur.com/YfJQV5z.png?id=10', 'cus_J5K9h1G2e3F7', 'pending', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "status", "password") VALUES ('7fd3548c-b926-4a60-95cb-62d2082728eb', '15Hilario.Goodwin-Keeling80@yahoo.com', 'John Doe', 'https://i.imgur.com/YfJQV5z.png?id=17', 'cus_J5K9h1G2e3F6', 'inactive', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "status", "password") VALUES ('7fbfd88a-5116-4860-ab3c-1327b4bfd797', '22Abbie_Bayer@yahoo.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=24', 'cus_J5K9h1G2e3F7', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "status", "password") VALUES ('b3d006f8-893c-4f51-bdef-698a60b00f2b', '29Sage_Borer@hotmail.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=31', 'cus_J5K9h1G2e3F4', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "status", "password") VALUES ('d27d4aea-cc7d-45b7-bc3b-ee1b0b639072', '36Kelvin_VonRueden@hotmail.com', 'Emily Jones', 'https://i.imgur.com/YfJQV5z.png?id=38', 'cus_J5K9h1G2e3F5', 'pending', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "status", "password") VALUES ('bef604e8-2d0a-4549-b2e6-8a038058ba8e', '43Maggie_Lemke31@yahoo.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=45', 'cus_J5K9h1G2e3F4', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "status", "password") VALUES ('f0f09c52-6092-43f9-b043-7df2df2f6565', '50Micah_Heaney@hotmail.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=52', 'cus_J5K9h1G2e3F4', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "status", "password") VALUES ('7678d516-a40c-4a68-9220-915bd8080d5a', '64Mallie90@hotmail.com', 'John Doe', 'https://i.imgur.com/YfJQV5z.png?id=66', 'cus_J5K9h1G2e3F4', 'inactive', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');

INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('b2e3e222-4b06-4972-9448-8aef3b6e640d', 'Event Reminder', 'Your booking has been confirmed for the tennis court.', 'Admin John', '74Raphaelle.OConnell@gmail.com', 'https://i.imgur.com/YfJQV5z.png?id=75', 'https://i.imgur.com/YfJQV5z.png?id=76', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('81819403-1fb5-4b2f-917d-ffc719754500', 'Payment Received', 'Your booking has been confirmed for the tennis court.', 'Manager Sarah', '81Tabitha77@gmail.com', 'https://i.imgur.com/YfJQV5z.png?id=82', 'https://i.imgur.com/YfJQV5z.png?id=83', 'f0f09c52-6092-43f9-b043-7df2df2f6565');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('09df7bc8-f9ba-4246-a79b-ac44da72e732', 'Payment Received', 'The facility will be closed for maintenance on Saturday.', 'Manager Sarah', '88Derrick.Lehner95@yahoo.com', 'https://i.imgur.com/YfJQV5z.png?id=89', 'https://i.imgur.com/YfJQV5z.png?id=90', 'f4afb18e-e1d2-41ef-8777-75fdd0f5ca17');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('229ba2a0-749c-468f-afb4-4afd6f83e47e', 'Payment Received', 'The facility will be closed for maintenance on Saturday.', 'Manager Sarah', '95Wilfrid_Schoen39@yahoo.com', 'https://i.imgur.com/YfJQV5z.png?id=96', 'https://i.imgur.com/YfJQV5z.png?id=97', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('1ab5f4c5-fb3c-4d6c-bcec-a07316796be9', 'Booking Confirmation', 'The facility will be closed for maintenance on Saturday.', 'Manager Sarah', '102Anne92@yahoo.com', 'https://i.imgur.com/YfJQV5z.png?id=103', 'https://i.imgur.com/YfJQV5z.png?id=104', '7fd3548c-b926-4a60-95cb-62d2082728eb');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('f4119be4-65f3-4d24-a236-af22d37e7063', 'Event Reminder', 'Dont forget your upcoming event this weekend', 'Support Team', '109Liliana87@yahoo.com', 'https://i.imgur.com/YfJQV5z.png?id=110', 'https://i.imgur.com/YfJQV5z.png?id=111', '7fd3548c-b926-4a60-95cb-62d2082728eb');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('6504cc05-da74-4985-8d1b-8ccbaf8966f2', 'Maintenance Scheduled', 'The facility will be closed for maintenance on Saturday.', 'Support Team', '116Francisca_Maggio72@hotmail.com', 'https://i.imgur.com/YfJQV5z.png?id=117', 'https://i.imgur.com/YfJQV5z.png?id=118', '3552259c-183d-4957-8836-b5baa22c3f3d');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('7597b55f-4a72-4ebe-bbef-85e95f0c371e', 'Facility Update', 'Dont forget your upcoming event this weekend', 'Admin Mike', '123Ashlee.Auer@hotmail.com', 'https://i.imgur.com/YfJQV5z.png?id=124', 'https://i.imgur.com/YfJQV5z.png?id=125', '3552259c-183d-4957-8836-b5baa22c3f3d');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('1170277a-26fd-4e5b-9f77-353c869479f9', 'Booking Confirmation', 'Your booking has been confirmed for the tennis court.', 'Admin Mike', '130Lizzie7@yahoo.com', 'https://i.imgur.com/YfJQV5z.png?id=131', 'https://i.imgur.com/YfJQV5z.png?id=132', 'd27d4aea-cc7d-45b7-bc3b-ee1b0b639072');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('e64b6a0d-8f6d-4459-9258-97422a390cde', 'Facility Update', 'New updates have been made to the gym facility.', 'Admin Mike', '137Rhianna.Rogahn62@gmail.com', 'https://i.imgur.com/YfJQV5z.png?id=138', 'https://i.imgur.com/YfJQV5z.png?id=139', 'd27d4aea-cc7d-45b7-bc3b-ee1b0b639072');

INSERT INTO "facility" ("id", "name", "description", "price") VALUES ('0acaa9a9-51ad-4633-a569-09074813df50', 'Gymnasium', 'Indoor court with wooden flooring', 839);
INSERT INTO "facility" ("id", "name", "description", "price") VALUES ('3aad75ce-a796-491c-bb8c-a66c6fb72dba', 'Soccer Field', 'Outdoor court with hard surface', 782);
INSERT INTO "facility" ("id", "name", "description", "price") VALUES ('308b454c-c89a-4f4d-b2a0-3dc42d8f51da', 'Gymnasium', 'Olympicsize pool with heated water', 908);
INSERT INTO "facility" ("id", "name", "description", "price") VALUES ('6ec20b39-ed6c-4159-8a3f-45b143b094f1', 'Swimming Pool', 'Indoor court with wooden flooring', 761);
INSERT INTO "facility" ("id", "name", "description", "price") VALUES ('6f6c64d6-e49d-4931-9cc5-7a2c4c008546', 'Swimming Pool', 'Indoor gym with modern equipment', 207);
INSERT INTO "facility" ("id", "name", "description", "price") VALUES ('2b67ddee-ba5d-4318-be6e-917fbcc9e155', 'Basketball Court', 'Olympicsize pool with heated water', 857);
INSERT INTO "facility" ("id", "name", "description", "price") VALUES ('c66eb1b5-b7fc-4491-b3e4-b073a52a9739', 'Basketball Court', 'Indoor court with wooden flooring', 829);
INSERT INTO "facility" ("id", "name", "description", "price") VALUES ('db0d2b85-43bd-4e85-8b34-914a4fd259b1', 'Swimming Pool', 'Indoor court with wooden flooring', 666);
INSERT INTO "facility" ("id", "name", "description", "price") VALUES ('e5041461-4e15-4c1e-84c5-4eb6d0a39646', 'Gymnasium', 'Indoor court with wooden flooring', 711);
INSERT INTO "facility" ("id", "name", "description", "price") VALUES ('958d75fb-e369-4838-8129-34e362290e26', 'Soccer Field', 'Olympicsize pool with heated water', 521);

INSERT INTO "booking" ("id", "status", "bookingDate", "price", "userId", "facilityId") VALUES ('89badd9d-b0e3-4aa9-802b-e434d3da2c91', 'completed', '2024-09-04T06:25:44.836Z', 951, '3552259c-183d-4957-8836-b5baa22c3f3d', '308b454c-c89a-4f4d-b2a0-3dc42d8f51da');
INSERT INTO "booking" ("id", "status", "bookingDate", "price", "userId", "facilityId") VALUES ('14880dce-fc95-4379-b652-dbba92f4e3f5', 'completed', '2024-03-10T14:16:21.162Z', 101, 'f0f09c52-6092-43f9-b043-7df2df2f6565', 'db0d2b85-43bd-4e85-8b34-914a4fd259b1');
INSERT INTO "booking" ("id", "status", "bookingDate", "price", "userId", "facilityId") VALUES ('0eeb3524-474b-4271-ad04-25a97a3fc068', 'completed', '2024-03-02T20:07:22.917Z', 315, '7fd3548c-b926-4a60-95cb-62d2082728eb', '2b67ddee-ba5d-4318-be6e-917fbcc9e155');
INSERT INTO "booking" ("id", "status", "bookingDate", "price", "userId", "facilityId") VALUES ('c1f42c7e-efba-493e-98f4-28d181deca29', 'completed', '2024-03-12T02:31:48.654Z', 299, '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '2b67ddee-ba5d-4318-be6e-917fbcc9e155');
INSERT INTO "booking" ("id", "status", "bookingDate", "price", "userId", "facilityId") VALUES ('fee807ba-ef4d-4eed-8ef7-1e897e299e6d', 'cancelled', '2025-02-12T06:45:28.737Z', 417, 'f0f09c52-6092-43f9-b043-7df2df2f6565', 'db0d2b85-43bd-4e85-8b34-914a4fd259b1');
INSERT INTO "booking" ("id", "status", "bookingDate", "price", "userId", "facilityId") VALUES ('1a5a0762-f789-4ab2-b837-1f13be450ad7', 'cancelled', '2023-08-05T13:58:46.390Z', 317, '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '3aad75ce-a796-491c-bb8c-a66c6fb72dba');
INSERT INTO "booking" ("id", "status", "bookingDate", "price", "userId", "facilityId") VALUES ('89495922-8129-487a-97e7-0262a8d8d366', 'pending', '2023-10-28T15:17:02.465Z', 511, 'bef604e8-2d0a-4549-b2e6-8a038058ba8e', '0acaa9a9-51ad-4633-a569-09074813df50');
INSERT INTO "booking" ("id", "status", "bookingDate", "price", "userId", "facilityId") VALUES ('b5c2ff06-f69f-4ff7-90a4-9da83af92505', 'cancelled', '2024-07-12T14:33:42.503Z', 849, 'bef604e8-2d0a-4549-b2e6-8a038058ba8e', '308b454c-c89a-4f4d-b2a0-3dc42d8f51da');
INSERT INTO "booking" ("id", "status", "bookingDate", "price", "userId", "facilityId") VALUES ('653c58b7-f21f-44e5-b3c7-180f70d601b5', 'rescheduled', '2024-10-14T22:59:17.366Z', 985, 'd27d4aea-cc7d-45b7-bc3b-ee1b0b639072', '0acaa9a9-51ad-4633-a569-09074813df50');
INSERT INTO "booking" ("id", "status", "bookingDate", "price", "userId", "facilityId") VALUES ('fc5b6640-9d99-4d43-9f9e-02a737286b2d', 'cancelled', '2025-06-10T13:29:00.323Z', 154, 'f4afb18e-e1d2-41ef-8777-75fdd0f5ca17', '6f6c64d6-e49d-4931-9cc5-7a2c4c008546');

INSERT INTO "payment" ("id", "amount", "paymentMethod", "paymentDate", "bookingId") VALUES ('732baab1-deec-4fa9-a9a3-8bbf16d92d13', 244, 'Net Banking', '2025-03-01T02:59:29.896Z', 'fee807ba-ef4d-4eed-8ef7-1e897e299e6d');
INSERT INTO "payment" ("id", "amount", "paymentMethod", "paymentDate", "bookingId") VALUES ('ef32ae99-7d93-4770-9d34-3eab118b9016', 288, 'Wallet', '2023-08-23T14:47:27.489Z', '653c58b7-f21f-44e5-b3c7-180f70d601b5');
INSERT INTO "payment" ("id", "amount", "paymentMethod", "paymentDate", "bookingId") VALUES ('f2e03478-d4a6-4961-9666-fd45b2f882a8', 548, 'Credit Card', '2025-06-17T21:06:59.323Z', '0eeb3524-474b-4271-ad04-25a97a3fc068');
INSERT INTO "payment" ("id", "amount", "paymentMethod", "paymentDate", "bookingId") VALUES ('68700941-b773-4f7d-87c1-c3413c8c315e', 996, 'UPI', '2024-04-28T07:05:15.935Z', '89495922-8129-487a-97e7-0262a8d8d366');
INSERT INTO "payment" ("id", "amount", "paymentMethod", "paymentDate", "bookingId") VALUES ('c0c9fe75-32a6-48d7-97df-688f1eb957b9', 642, 'Net Banking', '2025-04-03T19:05:58.635Z', 'fee807ba-ef4d-4eed-8ef7-1e897e299e6d');
INSERT INTO "payment" ("id", "amount", "paymentMethod", "paymentDate", "bookingId") VALUES ('1a73d95e-951b-4880-bb6e-e07f769d26f5', 815, 'Debit Card', '2024-12-16T19:17:20.040Z', 'fee807ba-ef4d-4eed-8ef7-1e897e299e6d');
INSERT INTO "payment" ("id", "amount", "paymentMethod", "paymentDate", "bookingId") VALUES ('4b47f442-1e4a-40f0-83b1-187919d3caa9', 996, 'Net Banking', '2025-05-31T14:55:18.470Z', 'fee807ba-ef4d-4eed-8ef7-1e897e299e6d');
INSERT INTO "payment" ("id", "amount", "paymentMethod", "paymentDate", "bookingId") VALUES ('a250a458-ccc4-4c9c-826a-27873a56f13d', 184, 'Wallet', '2024-03-15T00:02:43.311Z', 'c1f42c7e-efba-493e-98f4-28d181deca29');
INSERT INTO "payment" ("id", "amount", "paymentMethod", "paymentDate", "bookingId") VALUES ('6604c308-273b-4a57-8b4f-f6cdd7604f0f', 307, 'Credit Card', '2023-12-13T12:41:35.657Z', 'fc5b6640-9d99-4d43-9f9e-02a737286b2d');
INSERT INTO "payment" ("id", "amount", "paymentMethod", "paymentDate", "bookingId") VALUES ('25944ec7-8877-47b8-ae35-45c6a3412f4d', 956, 'Wallet', '2024-07-07T15:11:02.748Z', '0eeb3524-474b-4271-ad04-25a97a3fc068');

INSERT INTO "schedule" ("id", "startTime", "endTime", "facilityId") VALUES ('134e5d43-c2ae-4b2c-b778-649f2041850e', '2024-12-21T21:45:24.563Z', '2023-12-04T04:07:48.642Z', 'c66eb1b5-b7fc-4491-b3e4-b073a52a9739');
INSERT INTO "schedule" ("id", "startTime", "endTime", "facilityId") VALUES ('ebcec81a-0922-4b18-8ffa-cfb6fe9640af', '2024-01-31T19:53:14.137Z', '2024-07-13T22:41:19.855Z', '3aad75ce-a796-491c-bb8c-a66c6fb72dba');
INSERT INTO "schedule" ("id", "startTime", "endTime", "facilityId") VALUES ('03390926-b6ce-4253-9285-6c2365d39684', '2024-07-21T10:11:38.240Z', '2024-01-19T13:20:05.281Z', '6f6c64d6-e49d-4931-9cc5-7a2c4c008546');
INSERT INTO "schedule" ("id", "startTime", "endTime", "facilityId") VALUES ('05e04b95-5395-49f2-b624-9c08d3b4bbd1', '2023-07-05T06:15:37.966Z', '2025-01-15T12:09:21.591Z', '2b67ddee-ba5d-4318-be6e-917fbcc9e155');
INSERT INTO "schedule" ("id", "startTime", "endTime", "facilityId") VALUES ('b1c2bfc1-61b6-4b43-8df7-a995247db9ca', '2024-02-05T10:28:02.565Z', '2024-12-19T21:49:04.423Z', '3aad75ce-a796-491c-bb8c-a66c6fb72dba');
INSERT INTO "schedule" ("id", "startTime", "endTime", "facilityId") VALUES ('368a6eb4-62dc-4d8e-b6d3-9a946c4945e1', '2025-02-19T09:25:36.021Z', '2024-08-11T06:51:10.814Z', '3aad75ce-a796-491c-bb8c-a66c6fb72dba');
INSERT INTO "schedule" ("id", "startTime", "endTime", "facilityId") VALUES ('28f2bed5-bc2e-4fee-8722-0c4ffcda2abd', '2025-02-11T07:00:36.612Z', '2025-05-18T11:39:07.515Z', 'e5041461-4e15-4c1e-84c5-4eb6d0a39646');
INSERT INTO "schedule" ("id", "startTime", "endTime", "facilityId") VALUES ('f95b0c36-ce23-4739-b698-ea05c938122c', '2025-05-15T18:15:54.220Z', '2023-09-14T14:17:38.072Z', '2b67ddee-ba5d-4318-be6e-917fbcc9e155');
INSERT INTO "schedule" ("id", "startTime", "endTime", "facilityId") VALUES ('36daac12-f049-4800-97b5-6ac479f9d5ac', '2024-03-18T11:15:01.157Z', '2024-07-16T16:38:13.556Z', '0acaa9a9-51ad-4633-a569-09074813df50');
INSERT INTO "schedule" ("id", "startTime", "endTime", "facilityId") VALUES ('bf2acce2-7414-4af7-a884-d5f7aa84dda1', '2024-09-23T21:40:05.517Z', '2023-12-12T18:56:06.714Z', '0acaa9a9-51ad-4633-a569-09074813df50');

INSERT INTO "maintenance" ("id", "taskDescription", "status", "scheduledDate", "facilityId") VALUES ('638ca8e1-65ec-41d7-a7aa-f27a2c812075', 'Repaint the tennis court lines', 'In Progress', '2024-02-14T21:06:30.212Z', '308b454c-c89a-4f4d-b2a0-3dc42d8f51da');
INSERT INTO "maintenance" ("id", "taskDescription", "status", "scheduledDate", "facilityId") VALUES ('9b1a7041-77dd-4b31-9783-e50e2d827419', 'Fix the malfunctioning treadmill', 'In Progress', '2024-03-28T21:45:20.087Z', '958d75fb-e369-4838-8129-34e362290e26');
INSERT INTO "maintenance" ("id", "taskDescription", "status", "scheduledDate", "facilityId") VALUES ('a018986a-5c35-4864-a62d-05835244e95f', 'Fix the malfunctioning treadmill', 'In Progress', '2025-03-27T17:24:11.163Z', 'c66eb1b5-b7fc-4491-b3e4-b073a52a9739');
INSERT INTO "maintenance" ("id", "taskDescription", "status", "scheduledDate", "facilityId") VALUES ('badac93c-c845-4d49-ac01-15ce9ce9dafa', 'Fix the malfunctioning treadmill', 'Completed', '2025-03-30T08:46:57.116Z', '308b454c-c89a-4f4d-b2a0-3dc42d8f51da');
INSERT INTO "maintenance" ("id", "taskDescription", "status", "scheduledDate", "facilityId") VALUES ('23941403-1de5-4e60-826f-abf8f6eb3721', 'Fix the malfunctioning treadmill', 'Cancelled', '2023-07-03T17:49:05.667Z', '6f6c64d6-e49d-4931-9cc5-7a2c4c008546');
INSERT INTO "maintenance" ("id", "taskDescription", "status", "scheduledDate", "facilityId") VALUES ('b6a06124-8877-4638-bbd4-2533620dd154', 'Fix the malfunctioning treadmill', 'Cancelled', '2024-08-14T23:43:35.319Z', '308b454c-c89a-4f4d-b2a0-3dc42d8f51da');
INSERT INTO "maintenance" ("id", "taskDescription", "status", "scheduledDate", "facilityId") VALUES ('0c698170-34b8-4a4b-8a7a-778b5a08bcd3', 'Repaint the tennis court lines', 'Cancelled', '2024-11-13T04:47:38.510Z', '6ec20b39-ed6c-4159-8a3f-45b143b094f1');
INSERT INTO "maintenance" ("id", "taskDescription", "status", "scheduledDate", "facilityId") VALUES ('7aa0da05-39a2-46e9-8d2c-99461f161a98', 'Fix the malfunctioning treadmill', 'Scheduled', '2023-10-05T05:17:54.406Z', '6ec20b39-ed6c-4159-8a3f-45b143b094f1');
INSERT INTO "maintenance" ("id", "taskDescription", "status", "scheduledDate", "facilityId") VALUES ('8e8e66fc-26d1-40fe-8a9d-fdd120600c3f', 'Replace broken lights in the basketball court', 'Completed', '2024-12-19T17:46:50.147Z', '6ec20b39-ed6c-4159-8a3f-45b143b094f1');
INSERT INTO "maintenance" ("id", "taskDescription", "status", "scheduledDate", "facilityId") VALUES ('48bd3757-e9a9-4205-951a-1923b8c5cb69', 'Replace broken lights in the basketball court', 'Pending', '2025-06-16T15:20:21.954Z', '3aad75ce-a796-491c-bb8c-a66c6fb72dba');
    `,
      )
    } catch (error) {
      // ignore
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
