import React from "react";
import styled from "styled-components/macro";
import Downshift from "downshift";
import {Kommune, KommunerResponse} from "../../pages/api/kommuner";
import {Input, Label} from "nav-frontend-skjema";
import {SanityApplyDigitallyPanel} from "../../src/utils/sanityFetch";
import {SanityBlockContent} from "../SanityBlockContentNext";

const StyledKommunesøk = styled.div`
    border: none;
    margin: 0;
    padding: 1rem;
`;

const Resultat = styled.div`
    text-align: left;
    margin: 1rem 0;
`;

const StyledAutocomplete = styled.div`
    position: relative;
    max-width: 28rem;
    text-align: left;
`;

interface AutocompleteListProps {
    isVisible: boolean;
}

const AutocompleteList = styled.ul<AutocompleteListProps>`
    visibility: ${(props) => (props.isVisible ? "visible" : "hidden")};
    position: absolute;
    width: 100%;
    top: 100%;
    left: 0;
    z-index: 1000;
    max-width: 28rem;
    margin: 0;
    background-color: #fff;
    border: 2px solid #9bd0b0;
    border-radius: 0.25rem;
    padding: 0.25rem 0;
    overflow: auto;
`;

interface ListItemProps {
    isActive: boolean;
}

const ListItem = styled.li<ListItemProps>`
    background-color: ${(props) => (props.isActive ? "#254b6d" : "#ffffff")};
    color: ${(props) => (props.isActive ? "#ffffff" : "#333333")};
    padding: 0.5rem 1rem;
    display: block;
    clear: both;

    white-space: nowrap;
    user-select: none;
    cursor: pointer;
`;

const filterKommuneOnInputValue = (kommuner: Kommune[], inputValue: string) => {
    return kommuner.filter(
        (kommune) =>
            !inputValue ||
            kommune.kommuneNavn.toLowerCase().includes(inputValue.toLowerCase())
    );
};

export const Kommunesøk = (props: {
    applyDigitallyPanel: SanityApplyDigitallyPanel;
    kommuner: KommunerResponse;
}) => {
    const kommuneArray = Object.values(props.kommuner.kommuner).map(
        (kommune) => {
            return kommune;
        }
    );

    return (
        <StyledKommunesøk>
            <Downshift
                itemToString={(item: Kommune) => (item ? item.kommuneNavn : "")}
            >
                {({
                    getInputProps,
                    getItemProps,
                    getLabelProps,
                    getMenuProps,
                    isOpen,
                    inputValue,
                    highlightedIndex,
                    selectedItem,
                    getRootProps,
                }) => (
                    <StyledAutocomplete {...getRootProps()}>
                        <Label htmlFor="kommunesøk" {...getLabelProps()}>
                            {props.applyDigitallyPanel.label}
                        </Label>
                        <Input
                            autoFocus={true}
                            id="kommunesøk"
                            {...getInputProps()}
                            feil={
                                inputValue &&
                                filterKommuneOnInputValue(
                                    kommuneArray,
                                    inputValue
                                ).length === 0 &&
                                props.applyDigitallyPanel.errorText
                            }
                        />
                        <AutocompleteList
                            isVisible={
                                inputValue.length > 0 &&
                                inputValue.toLowerCase() !==
                                    selectedItem?.kommuneNavn.toLowerCase() &&
                                filterKommuneOnInputValue(
                                    kommuneArray,
                                    inputValue
                                ).length > 0
                            }
                            {...getMenuProps()}
                        >
                            {isOpen &&
                                filterKommuneOnInputValue(
                                    kommuneArray,
                                    inputValue
                                ).map((kommune, index) => {
                                    return (
                                        <ListItem
                                            {...getItemProps({
                                                key: kommune.kommuneNummer,
                                                index,
                                                item: kommune,
                                            })}
                                            isActive={
                                                highlightedIndex === index
                                            }
                                        >
                                            {kommune.kommuneNavn}
                                        </ListItem>
                                    );
                                })}
                        </AutocompleteList>
                        {selectedItem &&
                            selectedItem.kommuneNavn.toLowerCase() ===
                                inputValue.toLowerCase() && (
                                <>
                                    {selectedItem.kanMottaSoknader &&
                                        selectedItem.kanOppdatereStatus && (
                                            <Resultat>
                                                <SanityBlockContent
                                                    blocks={
                                                        props
                                                            .applyDigitallyPanel
                                                            .soknadOgInnsynTekst
                                                    }
                                                    templateProps={{
                                                        kommuneNavn:
                                                            selectedItem.kommuneNavn,
                                                    }}
                                                />
                                            </Resultat>
                                        )}
                                    {selectedItem.kanMottaSoknader &&
                                        !selectedItem.kanOppdatereStatus && (
                                            <Resultat>
                                                <SanityBlockContent
                                                    blocks={
                                                        props
                                                            .applyDigitallyPanel
                                                            .soknadUtenInnsynTekst
                                                    }
                                                    templateProps={{
                                                        kommuneNavn:
                                                            selectedItem.kommuneNavn,
                                                    }}
                                                />
                                            </Resultat>
                                        )}
                                    {!selectedItem.kanMottaSoknader && (
                                        <Resultat>
                                            <SanityBlockContent
                                                blocks={
                                                    props.applyDigitallyPanel
                                                        .kunPapirTekst
                                                }
                                                templateProps={{
                                                    kommuneNavn:
                                                        selectedItem.kommuneNavn,
                                                }}
                                            />
                                        </Resultat>
                                    )}
                                </>
                            )}
                    </StyledAutocomplete>
                )}
            </Downshift>
        </StyledKommunesøk>
    );
};
