import styled from "styled-components";

export const UserInfoContainer = styled.section<{ loading: boolean, error: string }>`
    margin: -10vh auto;
    display: flex;
    position: relative;
    z-index: 1;
    background: #FFF;
    border-radius: 16px;
    border: 1px solid #777777;
    height: 20vh;
    justify-content: ${({ loading, error }) => (loading || error) ? "center" : "space-between"};
    ${({ loading, error }) => (loading || error) ? "align-items: center;" : ""}
    width: 80%;
    padding: 16px 0;
`

export const UserInfoSection = styled.section<{ no_border?: boolean }>`
    width: 25%;
    padding: 0 16px;
    ${({ no_border }) => no_border ? "" : "border-right: 1px solid #D7D7D7;"}
`

export const Headline = styled.h6`
    text-transform: uppercase;
    font-size: 1em;
    color: #777777;
    letter-spacing: 2px;
    margin-bottom: 16px;
`

export const Text = styled.p`
    font-size: 1.25em;
    font-weight: bold;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    white-space: pre-wrap;
    overflow: hidden;
`