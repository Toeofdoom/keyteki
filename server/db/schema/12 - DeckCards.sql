-- Table: public."DeckCards"

-- DROP TABLE public."DeckCards";

CREATE TABLE public."DeckCards"
(
    "Id" integer NOT NULL GENERATED BY DEFAULT AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    "CardId" text COLLATE pg_catalog."default",
    "Count" integer NOT NULL,
    "Maverick" text COLLATE pg_catalog."default",
    "Anomaly" text COLLATE pg_catalog."default",
    "ImageUrl" text COLLATE pg_catalog."default",
    "Enhancements" text COLLATE pg_catalog."default",
    "DeckId" integer NOT NULL,
    CONSTRAINT "PK_DeckCards" PRIMARY KEY ("Id"),
    CONSTRAINT "FK_DeckCards_Decks_DeckId" FOREIGN KEY ("DeckId")
        REFERENCES public."Decks" ("Id") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE CASCADE
)

TABLESPACE pg_default;

ALTER TABLE public."DeckCards"
    OWNER to keyteki;
-- Index: IX_DeckCards_DeckId

-- DROP INDEX public."IX_DeckCards_DeckId";

CREATE INDEX "IX_DeckCards_DeckId"
    ON public."DeckCards" USING btree
    ("DeckId" ASC NULLS LAST)
    TABLESPACE pg_default;