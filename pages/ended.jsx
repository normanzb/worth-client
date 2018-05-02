import React from 'react';
import BasePage from './Base';
import Nav from '../components/Nav';
import NavPlaceholder from '../components/NavPlaceholder';
import Heading1 from '../components/Heading1';
import CardHolder from '../components/CardHolder';
import Head from 'next/head';
import graphql from '../util/graphql';
import fonts from '../util/fonts';
import graphqlFragments from '../util/graphqlFragments';
import gql from 'graphql-tag';

class Page extends BasePage {
    static async getInitialProps() {
        var now = new Date();
        return graphql
            .query({
                query: gql`
                    ${graphqlFragments.CampaignFields}

                    query getIndexData 
                    {
                        campaigns(where:{
                            end_lt: "${now.toISOString()}"
                        })
                        {
                            ...CampaignFields
                        }
                    }
                `
            }).then(result => {
                if (result.data) {
                    return result.data;
                }
                else {
                    return result;
                }
            }, function (result) {
                throw result;
            });  
    }
    render() {
        var props = this.props;
        return <div>
            <Head>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <style jsx global>
            {`
                html,body {
                    margin: 0;
                    padding: 0;
                }
                .heading
                {
                    margin: 30px 0;
                    font: ${fonts.heading};
                    text-transform: uppercase;
                }
                .heading > .inner 
                {
                    margin: 30px;
                }
            `}
            </style>
            <Nav />
            <NavPlaceholder />
            <Heading1>
                {'Ended deals'}
            </Heading1>
            <CardHolder campaigns={props.campaigns} featuring={props.featurings && props.featurings[0]} />
        </div>;
    }
}

export default Page;