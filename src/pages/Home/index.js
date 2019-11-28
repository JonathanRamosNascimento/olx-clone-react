import React, { useState } from 'react';
import { SearchArea, PageArea } from './styled';
import useApi from '../../helpers/OlxAPI';

import { PageContainer } from '../../components/MainComponent';

const Page = () => {
    const api = useApi();

    return (

        <>
            <SearchArea>
                <PageContainer>
                    ...
                </PageContainer>
            </SearchArea>
            <PageContainer>
                <PageArea>
                    ...
                </PageArea>
            </PageContainer>
        </>

    );
}

export default Page;