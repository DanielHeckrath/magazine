package grifts

import (
	"github.com/DanielHeckrath/magazine/actions"
	"github.com/gobuffalo/buffalo"
)

func init() {
	buffalo.Grifts(actions.App())
}
