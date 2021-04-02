--
-- PostgreSQL database dump
--

-- Dumped from database version 11.8
-- Dumped by pg_dump version 11.8

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: enum_Messages_type; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE public."enum_Messages_type" AS ENUM (
    'text',
    'image',
    'file',
    'code'
);


--
-- Name: enum_Notifications_type; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE public."enum_Notifications_type" AS ENUM (
    'incomingRequest',
    'acceptedRequest',
    'deniedRequest'
);


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: Chats; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."Chats" (
    id uuid NOT NULL
);


--
-- Name: Connections; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."Connections" (
    id uuid NOT NULL
);


--
-- Name: Files; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."Files" (
    id uuid NOT NULL,
    uri character varying(255) NOT NULL,
    "fileName" character varying(255) NOT NULL,
    "ChatId" uuid
);


--
-- Name: Messages; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."Messages" (
    id uuid NOT NULL,
    type public."enum_Messages_type" DEFAULT 'text'::public."enum_Messages_type" NOT NULL,
    content text NOT NULL,
    "userId" uuid NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "ChatId" uuid
);


--
-- Name: Notifications; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."Notifications" (
    id uuid NOT NULL,
    type public."enum_Notifications_type" NOT NULL,
    content json,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "UserId" uuid
);


--
-- Name: Requests; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."Requests" (
    id uuid NOT NULL,
    "fromId" uuid NOT NULL,
    "toId" uuid NOT NULL,
    pending boolean DEFAULT true NOT NULL,
    accepted boolean DEFAULT false NOT NULL,
    "UserId" uuid
);


--
-- Name: Skills; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."Skills" (
    id uuid NOT NULL,
    name character varying(35) NOT NULL
);


--
-- Name: UserChat; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."UserChat" (
    "UserId" uuid NOT NULL,
    "ChatId" uuid NOT NULL
);


--
-- Name: UserConnection; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."UserConnection" (
    "UserId" uuid NOT NULL,
    "ConnectionId" uuid NOT NULL
);


--
-- Name: UserSkill; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."UserSkill" (
    "UserId" uuid NOT NULL,
    "SkillId" uuid NOT NULL
);


--
-- Name: Users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."Users" (
    id uuid NOT NULL,
    "firstName" character varying(255) NOT NULL,
    "lastName" character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    password character varying(64),
    title character varying(35),
    description character varying(500),
    "profilePhoto" character varying(255),
    "backgroundImage" character varying(255),
    "foreign" boolean DEFAULT false,
    verified boolean DEFAULT false
);


--
-- Data for Name: Chats; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public."Chats" (id) FROM stdin;
e15d35d1-6837-4d13-a7a6-cb8c2df0b4e3
cf96764b-21ac-477b-9a31-294437d11785
caa1d319-5f12-48ff-8c03-b35fb83f71e1
\.


--
-- Data for Name: Connections; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public."Connections" (id) FROM stdin;
\.


--
-- Data for Name: Files; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public."Files" (id, uri, "fileName", "ChatId") FROM stdin;
42dda690-92b1-4e10-ba2c-ac204f83d6f9	data-access/uploads/chats/e15d35d1-6837-4d13-a7a6-cb8c2df0b4e3/08b46512-9e58-4d54-9821-3bf7736058d5/background.png	background.png	e15d35d1-6837-4d13-a7a6-cb8c2df0b4e3
ebc118ed-f93d-40c7-8aba-47892e9c9ff6	data-access/uploads/chats/e15d35d1-6837-4d13-a7a6-cb8c2df0b4e3/e1423d66-0919-4b2c-816c-454df5dbe17e/Software-Architecture-Patterns.pdf	Software-Architecture-Patterns.pdf	e15d35d1-6837-4d13-a7a6-cb8c2df0b4e3
8963e359-2773-4d41-8b8c-d7a275d0339d	data-access/uploads/chats/cf96764b-21ac-477b-9a31-294437d11785/e469191d-b0e0-4668-a9e2-0b1ae58cd26a/background.png	background.png	cf96764b-21ac-477b-9a31-294437d11785
e016e5a7-ae05-44e7-bdef-5fed2650583f	data-access/uploads/chats/cf96764b-21ac-477b-9a31-294437d11785/e469191d-b0e0-4668-a9e2-0b1ae58cd26a/Software-Architecture-Patterns.pdf	Software-Architecture-Patterns.pdf	cf96764b-21ac-477b-9a31-294437d11785
61dd5188-00ac-4a88-ad13-0c5bad5d4c49	data-access/uploads/chats/caa1d319-5f12-48ff-8c03-b35fb83f71e1/a53bb86a-9098-494f-8c08-6fb34e8d41a4/exercise_11.png	exercise_11.png	caa1d319-5f12-48ff-8c03-b35fb83f71e1
9ec1a3f0-989c-4bc7-9dc8-783c602e5fc3	data-access/uploads/chats/caa1d319-5f12-48ff-8c03-b35fb83f71e1/a53bb86a-9098-494f-8c08-6fb34e8d41a4/quantified_statements.pdf	quantified_statements.pdf	caa1d319-5f12-48ff-8c03-b35fb83f71e1
\.


--
-- Data for Name: Messages; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public."Messages" (id, type, content, "userId", "createdAt", "updatedAt", "ChatId") FROM stdin;
4200d88b-2e50-4758-8aab-084673bcfea3	text	Hello	08b46512-9e58-4d54-9821-3bf7736058d5	2021-04-02 18:44:18.838+01	2021-04-02 18:44:18.838+01	e15d35d1-6837-4d13-a7a6-cb8c2df0b4e3
69fa888b-cf93-4fd1-932f-46109996b22a	text	Hi	e1423d66-0919-4b2c-816c-454df5dbe17e	2021-04-02 18:44:22.238+01	2021-04-02 18:44:22.238+01	e15d35d1-6837-4d13-a7a6-cb8c2df0b4e3
2da5d0a0-80c3-4d89-9da3-c49f157988c2	image	data-access/uploads/chats/e15d35d1-6837-4d13-a7a6-cb8c2df0b4e3/08b46512-9e58-4d54-9821-3bf7736058d5/background.png	08b46512-9e58-4d54-9821-3bf7736058d5	2021-04-02 18:44:31.943+01	2021-04-02 18:44:31.943+01	e15d35d1-6837-4d13-a7a6-cb8c2df0b4e3
47579127-a394-4c76-aaa8-d9c94eeea42c	file	data-access/uploads/chats/e15d35d1-6837-4d13-a7a6-cb8c2df0b4e3/e1423d66-0919-4b2c-816c-454df5dbe17e/Software-Architecture-Patterns.pdf	e1423d66-0919-4b2c-816c-454df5dbe17e	2021-04-02 18:44:46.557+01	2021-04-02 18:44:46.557+01	e15d35d1-6837-4d13-a7a6-cb8c2df0b4e3
ff0db556-cf3d-4739-9f28-df608666b4a1	text	Hello	e469191d-b0e0-4668-a9e2-0b1ae58cd26a	2021-04-02 18:58:09.189+01	2021-04-02 18:58:09.189+01	cf96764b-21ac-477b-9a31-294437d11785
4952e868-61db-44c9-93c8-646ee94877dc	text	Hi	e1423d66-0919-4b2c-816c-454df5dbe17e	2021-04-02 18:58:14.512+01	2021-04-02 18:58:14.512+01	cf96764b-21ac-477b-9a31-294437d11785
ea22600d-a414-4f68-b347-cab196ea20d4	image	data-access/uploads/chats/cf96764b-21ac-477b-9a31-294437d11785/e469191d-b0e0-4668-a9e2-0b1ae58cd26a/background.png	e469191d-b0e0-4668-a9e2-0b1ae58cd26a	2021-04-02 18:58:24.382+01	2021-04-02 18:58:24.382+01	cf96764b-21ac-477b-9a31-294437d11785
00c01f62-2399-40d9-b533-613224fdf3ae	file	data-access/uploads/chats/cf96764b-21ac-477b-9a31-294437d11785/e469191d-b0e0-4668-a9e2-0b1ae58cd26a/Software-Architecture-Patterns.pdf	e469191d-b0e0-4668-a9e2-0b1ae58cd26a	2021-04-02 18:58:38.621+01	2021-04-02 18:58:38.621+01	cf96764b-21ac-477b-9a31-294437d11785
049ee2ee-87db-404b-87d6-e32ea914f295	text	Hello	a53bb86a-9098-494f-8c08-6fb34e8d41a4	2021-04-02 19:27:09.2+01	2021-04-02 19:27:09.2+01	caa1d319-5f12-48ff-8c03-b35fb83f71e1
900131c5-718d-4637-b266-312528fc4700	text	Hi	e1423d66-0919-4b2c-816c-454df5dbe17e	2021-04-02 19:27:20.637+01	2021-04-02 19:27:20.637+01	caa1d319-5f12-48ff-8c03-b35fb83f71e1
0db6fbfc-f79f-473f-988e-6fdb811b2543	image	data-access/uploads/chats/caa1d319-5f12-48ff-8c03-b35fb83f71e1/a53bb86a-9098-494f-8c08-6fb34e8d41a4/exercise_11.png	a53bb86a-9098-494f-8c08-6fb34e8d41a4	2021-04-02 19:27:29.517+01	2021-04-02 19:27:29.517+01	caa1d319-5f12-48ff-8c03-b35fb83f71e1
51161746-e94c-4334-aae3-7508cec4ef78	file	data-access/uploads/chats/caa1d319-5f12-48ff-8c03-b35fb83f71e1/a53bb86a-9098-494f-8c08-6fb34e8d41a4/quantified_statements.pdf	a53bb86a-9098-494f-8c08-6fb34e8d41a4	2021-04-02 19:27:43.599+01	2021-04-02 19:27:43.599+01	caa1d319-5f12-48ff-8c03-b35fb83f71e1
\.


--
-- Data for Name: Notifications; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public."Notifications" (id, type, content, "createdAt", "updatedAt", "UserId") FROM stdin;
1fcd74cf-241f-4b83-b8e9-0213211d3217	incomingRequest	{"requestId":"a62830c9-6744-441d-882e-3592446eba87","user":{"id":"e469191d-b0e0-4668-a9e2-0b1ae58cd26a","firstName":"Marcus","lastName":"Wilson","email":"marcus@wilson.com","password":"$2b$10$quYTJbFN9VBw5On56yQY6.si4qFjicN2s0uXwEtHtfEpeoAhdbJJ.","title":"Mathematics Student","description":"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr.","profilePhoto":"/data-access/uploads/users/e469191d-b0e0-4668-a9e2-0b1ae58cd26a/f2476279-b0fa-4b0e-a2f9-b809af09d90f.png","backgroundImage":"/data-access/uploads/users/e469191d-b0e0-4668-a9e2-0b1ae58cd26a/e7d4382b-1f04-4d57-a9ce-c97fc3e3be32.png","foreign":false,"verified":false}}	2021-04-02 18:57:39.721+01	2021-04-02 18:57:39.723+01	def9bc2c-81f8-40cb-bc5e-da4d65ff2c55
e06986bd-609f-4ec2-867e-aac5968d6c76	incomingRequest	{"requestId":"efa95a79-b7ae-4fcc-b7a5-50a3f1b3aa01","user":{"id":"e469191d-b0e0-4668-a9e2-0b1ae58cd26a","firstName":"Marcus","lastName":"Wilson","email":"marcus@wilson.com","password":"$2b$10$quYTJbFN9VBw5On56yQY6.si4qFjicN2s0uXwEtHtfEpeoAhdbJJ.","title":"Mathematics Student","description":"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr.","profilePhoto":"/data-access/uploads/users/e469191d-b0e0-4668-a9e2-0b1ae58cd26a/f2476279-b0fa-4b0e-a2f9-b809af09d90f.png","backgroundImage":"/data-access/uploads/users/e469191d-b0e0-4668-a9e2-0b1ae58cd26a/e7d4382b-1f04-4d57-a9ce-c97fc3e3be32.png","foreign":false,"verified":false}}	2021-04-02 18:57:36.315+01	2021-04-02 18:57:36.317+01	e1423d66-0919-4b2c-816c-454df5dbe17e
c155433c-80f5-4226-a276-b2bd3c825fa8	incomingRequest	{"requestId":"0b6e24f1-932e-4bbf-a09c-41618cddf90f","user":{"id":"a53bb86a-9098-494f-8c08-6fb34e8d41a4","firstName":"Adam","lastName":"Davies","email":"adam@davies.com","password":"$2b$10$AVqWkYXOYGr.jn2fWZOvheBwgY45Mo6alY2qTYAJ.7BmgfG66Z6IO","title":"Mathematics Student","description":"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr.","profilePhoto":"/data-access/uploads/users/a53bb86a-9098-494f-8c08-6fb34e8d41a4/e5ca2773-1b88-4e94-a67c-c99199eeb769.png","backgroundImage":"/data-access/uploads/users/a53bb86a-9098-494f-8c08-6fb34e8d41a4/815d1c3f-bba5-447b-900f-994e3c7ba1c4.png","foreign":false,"verified":false}}	2021-04-02 19:26:38.622+01	2021-04-02 19:26:38.627+01	def9bc2c-81f8-40cb-bc5e-da4d65ff2c55
0f53056f-b503-484f-9e5c-faf35e98f4c9	incomingRequest	{"requestId":"fe4922d7-7ef7-4949-8cea-0a6fe8bbc579","user":{"id":"a53bb86a-9098-494f-8c08-6fb34e8d41a4","firstName":"Adam","lastName":"Davies","email":"adam@davies.com","password":"$2b$10$AVqWkYXOYGr.jn2fWZOvheBwgY45Mo6alY2qTYAJ.7BmgfG66Z6IO","title":"Mathematics Student","description":"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr.","profilePhoto":"/data-access/uploads/users/a53bb86a-9098-494f-8c08-6fb34e8d41a4/e5ca2773-1b88-4e94-a67c-c99199eeb769.png","backgroundImage":"/data-access/uploads/users/a53bb86a-9098-494f-8c08-6fb34e8d41a4/815d1c3f-bba5-447b-900f-994e3c7ba1c4.png","foreign":false,"verified":false}}	2021-04-02 19:26:33.954+01	2021-04-02 19:26:33.965+01	e1423d66-0919-4b2c-816c-454df5dbe17e
\.


--
-- Data for Name: Requests; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public."Requests" (id, "fromId", "toId", pending, accepted, "UserId") FROM stdin;
980c532a-e7b4-4456-904a-c43e66481d10	08b46512-9e58-4d54-9821-3bf7736058d5	e1423d66-0919-4b2c-816c-454df5dbe17e	f	t	\N
f5e74a5a-ff12-45e0-82e8-96552d4ee8da	03e97093-db21-4481-8bbe-eca13ca6ac88	e1423d66-0919-4b2c-816c-454df5dbe17e	t	f	\N
a62830c9-6744-441d-882e-3592446eba87	e469191d-b0e0-4668-a9e2-0b1ae58cd26a	def9bc2c-81f8-40cb-bc5e-da4d65ff2c55	t	f	\N
efa95a79-b7ae-4fcc-b7a5-50a3f1b3aa01	e469191d-b0e0-4668-a9e2-0b1ae58cd26a	e1423d66-0919-4b2c-816c-454df5dbe17e	f	t	\N
0b6e24f1-932e-4bbf-a09c-41618cddf90f	a53bb86a-9098-494f-8c08-6fb34e8d41a4	def9bc2c-81f8-40cb-bc5e-da4d65ff2c55	t	f	\N
fe4922d7-7ef7-4949-8cea-0a6fe8bbc579	a53bb86a-9098-494f-8c08-6fb34e8d41a4	e1423d66-0919-4b2c-816c-454df5dbe17e	f	t	\N
\.


--
-- Data for Name: Skills; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public."Skills" (id, name) FROM stdin;
d4860c79-5180-4855-bcef-402c427ed3f9	Mathematics
1ff6d3db-7a81-4ff8-827c-d6b40ab9b5e1	Algebra
abaffc58-4363-4971-b5a3-0396547c5cef	Calculus
39790807-beb1-4c04-8346-10bf8b6a86ac	Logic
16fe3953-6f24-44e3-9b29-b79cd2c4e82c	Set Theory
bd97bd2a-d905-411d-ab56-66d2c6e0fc1c	Physics
f779f569-55c8-4f49-bd82-d8a3b2a01964	Mechanics
cd398507-a8fd-44a2-a1da-f1f612eb1d96	Thermodynamics
39ef7868-cf5c-4ec6-8dc6-0c0f33655efc	Mathematical Physics
71256ff8-e0be-457e-a45a-147586decb1c	Computer Science
b389a183-6320-4f4c-8331-f68f7927f0a3	Java Programming
e2375506-b032-40cc-bab5-174bc3de6581	Data Structures
913d6eec-cf3c-4f7f-98da-2977071f1063	Algorithms
53f4352e-ea35-447a-8587-3fd913907285	Java
c6977332-2b37-4856-b1b9-3b7def8e0712	Python
37e2708b-6712-4277-b2a5-d661e4573ec5	Drawing
c7e0d3f1-bb90-4905-9928-628c20e19a93	Arts
\.


--
-- Data for Name: UserChat; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public."UserChat" ("UserId", "ChatId") FROM stdin;
e1423d66-0919-4b2c-816c-454df5dbe17e	e15d35d1-6837-4d13-a7a6-cb8c2df0b4e3
e469191d-b0e0-4668-a9e2-0b1ae58cd26a	cf96764b-21ac-477b-9a31-294437d11785
e1423d66-0919-4b2c-816c-454df5dbe17e	cf96764b-21ac-477b-9a31-294437d11785
a53bb86a-9098-494f-8c08-6fb34e8d41a4	caa1d319-5f12-48ff-8c03-b35fb83f71e1
e1423d66-0919-4b2c-816c-454df5dbe17e	caa1d319-5f12-48ff-8c03-b35fb83f71e1
\.


--
-- Data for Name: UserConnection; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public."UserConnection" ("UserId", "ConnectionId") FROM stdin;
\.


--
-- Data for Name: UserSkill; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public."UserSkill" ("UserId", "SkillId") FROM stdin;
e1423d66-0919-4b2c-816c-454df5dbe17e	d4860c79-5180-4855-bcef-402c427ed3f9
e1423d66-0919-4b2c-816c-454df5dbe17e	1ff6d3db-7a81-4ff8-827c-d6b40ab9b5e1
e1423d66-0919-4b2c-816c-454df5dbe17e	abaffc58-4363-4971-b5a3-0396547c5cef
e1423d66-0919-4b2c-816c-454df5dbe17e	39790807-beb1-4c04-8346-10bf8b6a86ac
e1423d66-0919-4b2c-816c-454df5dbe17e	16fe3953-6f24-44e3-9b29-b79cd2c4e82c
def9bc2c-81f8-40cb-bc5e-da4d65ff2c55	d4860c79-5180-4855-bcef-402c427ed3f9
def9bc2c-81f8-40cb-bc5e-da4d65ff2c55	bd97bd2a-d905-411d-ab56-66d2c6e0fc1c
def9bc2c-81f8-40cb-bc5e-da4d65ff2c55	f779f569-55c8-4f49-bd82-d8a3b2a01964
def9bc2c-81f8-40cb-bc5e-da4d65ff2c55	cd398507-a8fd-44a2-a1da-f1f612eb1d96
def9bc2c-81f8-40cb-bc5e-da4d65ff2c55	39ef7868-cf5c-4ec6-8dc6-0c0f33655efc
58baefe6-ed06-4656-b457-f2c8901bdff7	d4860c79-5180-4855-bcef-402c427ed3f9
58baefe6-ed06-4656-b457-f2c8901bdff7	71256ff8-e0be-457e-a45a-147586decb1c
58baefe6-ed06-4656-b457-f2c8901bdff7	e2375506-b032-40cc-bab5-174bc3de6581
58baefe6-ed06-4656-b457-f2c8901bdff7	913d6eec-cf3c-4f7f-98da-2977071f1063
58baefe6-ed06-4656-b457-f2c8901bdff7	53f4352e-ea35-447a-8587-3fd913907285
58baefe6-ed06-4656-b457-f2c8901bdff7	c6977332-2b37-4856-b1b9-3b7def8e0712
a69d3510-ec9a-47ab-b37c-9dba5c9b2b79	d4860c79-5180-4855-bcef-402c427ed3f9
bd82534d-fe05-4a99-8cb7-a55c285d0f62	d4860c79-5180-4855-bcef-402c427ed3f9
4b4beb8e-f87a-4ece-88da-55538700b605	d4860c79-5180-4855-bcef-402c427ed3f9
fd132f6b-f08a-498c-a8b0-01cd71fb99e8	37e2708b-6712-4277-b2a5-d661e4573ec5
fd132f6b-f08a-498c-a8b0-01cd71fb99e8	c7e0d3f1-bb90-4905-9928-628c20e19a93
e469191d-b0e0-4668-a9e2-0b1ae58cd26a	1ff6d3db-7a81-4ff8-827c-d6b40ab9b5e1
e469191d-b0e0-4668-a9e2-0b1ae58cd26a	abaffc58-4363-4971-b5a3-0396547c5cef
a53bb86a-9098-494f-8c08-6fb34e8d41a4	1ff6d3db-7a81-4ff8-827c-d6b40ab9b5e1
a53bb86a-9098-494f-8c08-6fb34e8d41a4	abaffc58-4363-4971-b5a3-0396547c5cef
\.


--
-- Data for Name: Users; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public."Users" (id, "firstName", "lastName", email, password, title, description, "profilePhoto", "backgroundImage", "foreign", verified) FROM stdin;
bd82534d-fe05-4a99-8cb7-a55c285d0f62	John	Smith	john@smith.com	$2b$10$ROQS3d5E8/e.bpkrC1a8m.dB0mUy/rLyO6csjHFZFB5cq2Qs2dM6S	GCSE Mathematics Preparation	\N	\N	\N	f	f
4b4beb8e-f87a-4ece-88da-55538700b605	Harry	Baker	harry@baker.com	$2b$10$WZDrKH5sR7v2VlRdGGgHj.Hk0dx19sTSMddYpZJs.bgJL7wdN0ceq	Teaching Mathematics & 3D Graphics	\N	\N	\N	f	f
e1423d66-0919-4b2c-816c-454df5dbe17e	Ian	Jones	ian@jones.com	$2b$10$GLYVUg1iEe.mIlEvKHrWsOyQ91VJhGLWEmvswDZCgUoTXjn/lqhz2	Mathematics Passionate	Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr.	/data-access/uploads/users/e1423d66-0919-4b2c-816c-454df5dbe17e/75723e1b-d27d-429b-9c53-151c29e0d4d7.png	/data-access/uploads/users/e1423d66-0919-4b2c-816c-454df5dbe17e/c6a9762a-99cf-4bb2-9a8e-ad3e119da1b8.png	f	f
def9bc2c-81f8-40cb-bc5e-da4d65ff2c55	Rich	Oswald	rich@oswald.com	$2b$10$FheRIT2hDNfM6ZNscIrm4urAx8kuaxP8uT4fV6hpjlPkUW8doT8i6	Mathematics & Physics Teacher	Mauris nec ex lectus. Ut sit amet accumsan eros, vel maximus sapien. Vestibulum et vestibulum nulla. Pellentesque faucibus urna ut mattis sollicitudin. Aliquam a velit sit amet diam fermentum luctus. Maecenas ornare massa in ante tempus posuere. Quisque porttitor arcu eu libero commodo vulputate.	/data-access/uploads/users/def9bc2c-81f8-40cb-bc5e-da4d65ff2c55/57efa3ba-80a1-4dd9-9a83-844e0a78a6e0.png	/data-access/uploads/users/def9bc2c-81f8-40cb-bc5e-da4d65ff2c55/16beb3ad-7018-41b9-b553-a39ccd5c05b8.jpg	f	f
fd132f6b-f08a-498c-a8b0-01cd71fb99e8	Anna	Doe	anna@doe.com	$2b$10$HgkucPGvtMvOykGYv1r5yePaXA63kkwf9pOcnqsIfiANA0qjIdGz.	Arts Teacher	\N	\N	\N	f	f
a53bb86a-9098-494f-8c08-6fb34e8d41a4	Adam	Davies	adam@davies.com	$2b$10$AVqWkYXOYGr.jn2fWZOvheBwgY45Mo6alY2qTYAJ.7BmgfG66Z6IO	Mathematics Student	Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr.	/data-access/uploads/users/a53bb86a-9098-494f-8c08-6fb34e8d41a4/e5ca2773-1b88-4e94-a67c-c99199eeb769.png	/data-access/uploads/users/a53bb86a-9098-494f-8c08-6fb34e8d41a4/815d1c3f-bba5-447b-900f-994e3c7ba1c4.png	f	f
58baefe6-ed06-4656-b457-f2c8901bdff7	Ben	Bailey	ben@bailey.com	$2b$10$/UkwecpBuWsVidVqswSYb.pq7VvySY.C/IEF//IsUWdW1h//CJq.O	Computer Science & Mathematics	Etiam nec augue non lorem iaculis mattis eu sit amet ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras quis tempus nisi. Etiam pharetra rhoncus magna, non elementum est malesuada in. Quisque nec urna facilisis, tincidunt est vel, semper augue. Phasellus dictum sagittis odio nec pharetra.	/data-access/uploads/users/58baefe6-ed06-4656-b457-f2c8901bdff7/8873907a-4db3-4347-b069-fad09448440f.png	/data-access/uploads/users/58baefe6-ed06-4656-b457-f2c8901bdff7/8c6cb9c8-5ede-4c22-988a-4046f4542fdc.jpg	f	f
a69d3510-ec9a-47ab-b37c-9dba5c9b2b79	Sophia	Williams	sophia@williams.com	$2b$10$u.rsWSsuAScf2QBlo/5T0OJ3hdEcmLKi41/DpYDsM/DCeTSIYjX7.	Mathematics Teacher	\N	/data-access/uploads/users/a69d3510-ec9a-47ab-b37c-9dba5c9b2b79/3b9d0afc-1fdc-4a76-8731-cb286478373a.png	\N	f	f
e469191d-b0e0-4668-a9e2-0b1ae58cd26a	Marcus	Wilson	marcus@wilson.com	$2b$10$quYTJbFN9VBw5On56yQY6.si4qFjicN2s0uXwEtHtfEpeoAhdbJJ.	Mathematics Student	Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr.	/data-access/uploads/users/e469191d-b0e0-4668-a9e2-0b1ae58cd26a/f2476279-b0fa-4b0e-a2f9-b809af09d90f.png	/data-access/uploads/users/e469191d-b0e0-4668-a9e2-0b1ae58cd26a/e7d4382b-1f04-4d57-a9ce-c97fc3e3be32.png	f	f
\.


--
-- Name: Chats Chats_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."Chats"
    ADD CONSTRAINT "Chats_pkey" PRIMARY KEY (id);


--
-- Name: Connections Connections_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."Connections"
    ADD CONSTRAINT "Connections_pkey" PRIMARY KEY (id);


--
-- Name: Files Files_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."Files"
    ADD CONSTRAINT "Files_pkey" PRIMARY KEY (id);


--
-- Name: Messages Messages_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."Messages"
    ADD CONSTRAINT "Messages_pkey" PRIMARY KEY (id);


--
-- Name: Notifications Notifications_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."Notifications"
    ADD CONSTRAINT "Notifications_pkey" PRIMARY KEY (id);


--
-- Name: Requests Requests_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."Requests"
    ADD CONSTRAINT "Requests_pkey" PRIMARY KEY (id);


--
-- Name: Skills Skills_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."Skills"
    ADD CONSTRAINT "Skills_pkey" PRIMARY KEY (id);


--
-- Name: UserChat UserChat_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."UserChat"
    ADD CONSTRAINT "UserChat_pkey" PRIMARY KEY ("UserId", "ChatId");


--
-- Name: UserConnection UserConnection_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."UserConnection"
    ADD CONSTRAINT "UserConnection_pkey" PRIMARY KEY ("UserId", "ConnectionId");


--
-- Name: UserSkill UserSkill_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."UserSkill"
    ADD CONSTRAINT "UserSkill_pkey" PRIMARY KEY ("UserId", "SkillId");


--
-- Name: Users Users_email_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key" UNIQUE (email);


--
-- Name: Users Users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_pkey" PRIMARY KEY (id);


--
-- Name: Files Files_ChatId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."Files"
    ADD CONSTRAINT "Files_ChatId_fkey" FOREIGN KEY ("ChatId") REFERENCES public."Chats"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: Messages Messages_ChatId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."Messages"
    ADD CONSTRAINT "Messages_ChatId_fkey" FOREIGN KEY ("ChatId") REFERENCES public."Chats"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: Notifications Notifications_UserId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."Notifications"
    ADD CONSTRAINT "Notifications_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES public."Users"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: Requests Requests_UserId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."Requests"
    ADD CONSTRAINT "Requests_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES public."Users"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: UserChat UserChat_ChatId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."UserChat"
    ADD CONSTRAINT "UserChat_ChatId_fkey" FOREIGN KEY ("ChatId") REFERENCES public."Chats"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: UserChat UserChat_UserId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."UserChat"
    ADD CONSTRAINT "UserChat_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES public."Users"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: UserConnection UserConnection_ConnectionId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."UserConnection"
    ADD CONSTRAINT "UserConnection_ConnectionId_fkey" FOREIGN KEY ("ConnectionId") REFERENCES public."Connections"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: UserConnection UserConnection_UserId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."UserConnection"
    ADD CONSTRAINT "UserConnection_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES public."Users"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: UserSkill UserSkill_SkillId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."UserSkill"
    ADD CONSTRAINT "UserSkill_SkillId_fkey" FOREIGN KEY ("SkillId") REFERENCES public."Skills"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: UserSkill UserSkill_UserId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."UserSkill"
    ADD CONSTRAINT "UserSkill_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES public."Users"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

