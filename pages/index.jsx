import React from 'react';
import BasePage from './Base';
import Nav from '../components/Nav';
import Stage from '../components/Stage';
import CardHolder from '../components/CardHolder';
import Heading1 from '../components/Heading1';
import Head from 'next/head';
import graphql from '../util/graphql';
import cookie from '../util/cookie';
import graphqlFragments from '../util/graphqlFragments';
import gql from 'graphql-tag';

class Page extends BasePage {
    static async getInitialProps(param) {
        cookie.init(param);
        var now = new Date();
        return graphql
            .query({
                query: gql`
                    ${graphqlFragments.CampaignFields}

                    query getIndexData 
                    {
                        featurings(limit:1)
                        {
                            campaign
                            {
                                ...CampaignFields
                            }
                        }
                        campaigns(limit:20, where:{
                            start_lt: "${now.toISOString()}",
                            end_gt: "${now.toISOString()}"
                        })
                        {
                            ...CampaignFields
                        }
                    }
                `
            }).then(result => {
                var ret;
                if (result.data) {
                    ret = result.data;
                }
                else {
                    ret = result;
                }
                return Object.assign({}, {
                    pathname: param.pathname || window.location.pathname
                }, ret);
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
                html,body 
                {
                    margin: 0;
                    padding: 0;
                }
            `}
            </style>
            <Nav pathname={props.pathname} />
            <Stage featuring={props.featurings && props.featurings[0]} />
            <Heading1>
                {'More hot deals'}
            </Heading1>
            <CardHolder campaigns={props.campaigns} featuring={props.featurings && props.featurings[0]} />
        </div>;
    }
}

export default Page;