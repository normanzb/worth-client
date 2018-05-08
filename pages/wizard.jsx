import React from 'react';
import BasePage from './Base';
import Nav from '../components/Nav';
import Head from 'next/head';
import graphql from '../util/graphql';
import fonts from '../util/fonts';
import graphqlFragments from '../util/graphqlFragments';
import gql from 'graphql-tag';
import UrlSearchParams from 'url-search-params';
import Slide from '../components/Slide';
import Detail from '../components/Detail';

class Page extends BasePage {
    static async getInitialProps(param) {
        var qs = param.query;

        if (!qs) {
            qs = window.location.search.substr(1);
        }

        var qsObject = new UrlSearchParams(qs);
        var id = qsObject.get('id');

        if (!id) {
            throw new Error('Id must be specified');
        }

        return graphql
            .query({
                query: gql`
                    ${graphqlFragments.CampaignFields}

                    query getDetailData 
                    {
                        campaigns(where:{
                            _id: "${id}"
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
            <Slide images={props.campaigns[0].item.images} />
            <Detail campaign={props.campaigns[0]} />
        </div>;
    }
}

export default Page;