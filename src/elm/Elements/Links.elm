module Elements.Links exposing (linkList)

import Html exposing (Html, div, a, img)
import Html.Attributes exposing (..)


type alias Link =
    { alt : String
    , href : String
    , img : String
    }


links : List Link
links =
    [ Link "Twitter" "http://twitter.com/calmeryme" "static/img/twitter.png"
    , Link "GitHub" "http://github.com/calmery" "static/img/github.png"
    , Link "Blog" "http://calmery.hatenablog.com" "static/img/blog.png"
    ]


create : List Link -> Html msg
create links =
    div [ id "link" ]
        (links
            |> List.map
                (\s ->
                    div [ class "wrapper" ]
                        [ a [ href s.href ]
                            [ div [ attribute "ontouchstart" "" ]
                                [ img [ src s.img, alt s.alt ]
                                    []
                                ]
                            ]
                        ]
                )
        )


linkList : Html msg
linkList =
    create links