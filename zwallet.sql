--
-- PostgreSQL database dump
--

-- Dumped from database version 14.4
-- Dumped by pg_dump version 14.4

-- Started on 2022-09-27 21:00:29

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
-- TOC entry 3 (class 2615 OID 2200)
-- Name: public; Type: SCHEMA; Schema: -; Owner: postgres
--

CREATE SCHEMA public;


ALTER SCHEMA public OWNER TO postgres;

--
-- TOC entry 3310 (class 0 OID 0)
-- Dependencies: 3
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: postgres
--

COMMENT ON SCHEMA public IS 'standard public schema';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 209 (class 1259 OID 49324)
-- Name: contactus; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.contactus (
    id integer NOT NULL,
    fullname character varying,
    email character varying,
    messages text
);


ALTER TABLE public.contactus OWNER TO postgres;

--
-- TOC entry 210 (class 1259 OID 49327)
-- Name: contactus_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.contactus ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.contactus_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 3303 (class 0 OID 49324)
-- Dependencies: 209
-- Data for Name: contactus; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.contactus (id, fullname, email, messages) FROM stdin;
1	aduh	aduh@mail.com	aduh biyuuung
2	aduh	aduh@mail.com	aduh biyuuung
3	dddddd	himawanarif7@gmail.com	dsadzda
4	dddddd	himawanarif7@gmail.com	123asddfsdf
5	dddddd	himawanarif7@gmail.com	dasd3123123
6	dddddd	himawanarif7@gmail.com	dasd3123123
7	dddddd	himawanarif7@gmail.com	dasd3123123
8	dddddd	himawanarif7@gmail.com	dasd3123123
9	dddddd	himawanarif7@gmail.com	dasd3123123
10	dddddd	himawanarif7@gmail.com	123123
11	dddddd	himawanarif7@gmail.com	asdad
12	dddddd	himawanarif7@gmail.com	asdad
13	dddddd	himawanarif7@gmail.com	asdad
14	dddddd	himawanarif7@gmail.com	asdad
15	dddddd	himawanarif7@gmail.com	0989789
16	dddddd	himawanarif7@gmail.com	1213131341242342
17	dddddd	himawanarif7@gmail.com	dadadwa
18	dddddd	himawanarif7@gmail.com	coba
19	dddddd	himawanarif7@gmail.com	sdaa
20	sadas	himawanarif7@gmail.com	dadadawsdaw
21	dddddd	himawanarif7@gmail.com	fghf
22	dddddd	himawanarif7@gmail.com	dicabdabdhabdsd
\.


--
-- TOC entry 3311 (class 0 OID 0)
-- Dependencies: 210
-- Name: contactus_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.contactus_id_seq', 22, true);


-- Completed on 2022-09-27 21:00:30

--
-- PostgreSQL database dump complete
--

