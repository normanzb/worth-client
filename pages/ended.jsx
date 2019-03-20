import React from 'react';
import BasePage from './Base';
import Nav from '../components/Nav';
import NavPlaceholder from '../components/NavPlaceholder';
import Heading1 from '../components/Heading1';
import CardHolder from '../components/CardHolder';
import Head from 'next/head';
import graphql from '../util/graphql';
import fonts from '../util/fonts';
import cookie from '../util/cookie';
import graphqlFragments from '../util/graphqlFragments';
import gql from 'graphql-tag';
import Timeout from '../svgs/calendar-timeout.svg';

class Page extends BasePage {
    static async getInitialProps(param) {
        cookie.init(param);
        var now = new Date();
        return graphql
            .query({
                query: gql`
                    ${graphqlFragments.CampaignFields}

                    query getEndData 
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
                var ret;
                if (result.data) {
                    ret = result.data;
                }
                else {
                    ret =result;
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
            <Nav pathname={props.pathname} />
            <NavPlaceholder />
            <Heading1 icon={Timeout}>
                {'Ended deals'}
            </Heading1>
            <CardHolder campaigns={props.campaigns} featuring={props.featurings && props.featurings[0]} />
        </div>;
    }
}

export default Page;